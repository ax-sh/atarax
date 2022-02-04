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
import { __await } from 'tslib';
import { ViteReactThreeJsAppGeneratorSchema } from './schema';

export function getProjectFolder() {}

export function updateProjectConfig(tree: Tree, schema: ViteReactThreeJsAppGeneratorSchema) {
	const config = readProjectConfiguration(tree, schema.project);
	const configFile = joinPathFragments('apps/', schema.project, 'vite.config.ts');

	config.targets.serve.options.configFile = configFile;

	updateProjectConfiguration(tree, schema.project, config);
	return config;
}

export function generateProjectFiles(tree: Tree, schema: ViteReactThreeJsAppGeneratorSchema) {
	generateFiles(tree, joinPathFragments(__dirname, 'files'), joinPathFragments('apps/', schema.project), schema);
}

export default async function (tree: Tree, schema: ViteReactThreeJsAppGeneratorSchema) {
	await formatFiles(tree);
	return () => {
		installPackagesTask(tree);
	};
}
