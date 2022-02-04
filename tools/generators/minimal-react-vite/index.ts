import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  readProjectConfiguration,
  updateProjectConfiguration,
  joinPathFragments,
} from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { stringUtils } from '@nrwl/workspace';

import { applicationGenerator } from '@nxext/react/src/generators/application/application';
import { MinimalReactVite } from './schema';

export function generateProjectBase(tree: Tree, schema: MinimalReactVite) {
  return applicationGenerator(tree, {
    name: schema.name,
    style: 'scss',
    skipFormat: false,
    unitTestRunner: 'none',
    linter: Linter.EsLint,
    pascalCaseFiles: true,
    skipWorkspaceJson: true,
    globalCss: true,
    babelJest: false,
    strict: true,
  });
}

export function getProjectFolder(schema: MinimalReactVite) {
  return joinPathFragments('apps', schema.name);
}

export function getModifiedProjectConfig(tree: Tree, schema: MinimalReactVite) {
  const config = readProjectConfiguration(tree, schema.name);
  const configFile = joinPathFragments(getProjectFolder(schema), 'vite.config.ts');
  config.targets.serve.options.configFile = configFile;
  return config;
}

export default async function (tree: Tree, schema: MinimalReactVite) {
  await generateProjectBase(tree, schema);
  const config = getModifiedProjectConfig(tree, schema);
  updateProjectConfiguration(tree, schema.name, config);

  await generateFiles(tree, joinPathFragments(__dirname, 'files'), getProjectFolder(schema), {
    projectName: schema.name,
    capitalize: stringUtils.capitalize,
  });

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
