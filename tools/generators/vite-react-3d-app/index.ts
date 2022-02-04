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
import { ViteReactThreeJsAppGeneratorSchema } from './schema';

export function generateProjectBase(tree: Tree, schema: ViteReactThreeJsAppGeneratorSchema) {
	return applicationGenerator(tree, {
		name: schema.project,

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

export function getProjectFolder(schema: ViteReactThreeJsAppGeneratorSchema) {
	return joinPathFragments('apps', schema.project);
}

export function updateProjectConfig(tree: Tree, schema: ViteReactThreeJsAppGeneratorSchema) {
	const config = readProjectConfiguration(tree, schema.project);
	const configFile = joinPathFragments(getProjectFolder(schema), 'vite.config.ts');

	config.targets.serve.options.configFile = configFile;

	updateProjectConfiguration(tree, schema.project, config);
	return config;
}

export function generateProjectFiles(tree: Tree, schema: ViteReactThreeJsAppGeneratorSchema) {
	generateFiles(tree, joinPathFragments(__dirname, 'files'), getProjectFolder(schema), schema);
}

export default async function (tree: Tree, schema: ViteReactThreeJsAppGeneratorSchema) {
	await generateProjectBase(tree, schema);
	await formatFiles(tree);
	return () => {
		installPackagesTask(tree);
	};
}
