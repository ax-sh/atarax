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

export default async function (tree: Tree, schema: MinimalReactVite) {
  await generateProjectBase(tree, schema);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
