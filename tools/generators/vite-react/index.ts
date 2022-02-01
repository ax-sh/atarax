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

export default async function (tree: Tree, schema: any) {
	await applicationGenerator(tree, {
		name: schema.name,
		style: 'scss',
		skipFormat: false,
		unitTestRunner: 'none',
		linter: Linter.EsLint,
		pascalCaseFiles: true,
		globalCss: true,
		babelJest: false,
	});
	const project = await readProjectConfiguration(tree, schema.name);
	// project.targets = project.targets || {};
	const configFile = joinPathFragments('apps/', schema.name, 'vite.config.ts');
	project.targets.serve.options.configFile = configFile;
	updateProjectConfiguration(tree, schema.name, project);

	await generateFiles(tree, joinPathFragments(__dirname, 'files'), joinPathFragments('apps/', schema.name), schema);
	await formatFiles(tree);
	return () => {
		installPackagesTask(tree);
	};
}
