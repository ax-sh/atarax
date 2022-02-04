import { expect, test, assert, describe, beforeEach } from 'vitest';
import { applicationGenerator } from '@nxext/react/src/generators/application/application';
import { ViteReactThreeJsAppGeneratorSchema } from './schema';
import { readProjectConfiguration, Tree } from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';

describe('ViteReactThreeJsAppGeneratorSchema', () => {
	const schema: ViteReactThreeJsAppGeneratorSchema = { project: 'test-threejs-app' };
	let tree: Tree;

	beforeEach(async () => {
		tree = createTreeWithEmptyWorkspace();
		await applicationGenerator(tree, {
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
	});

	test('should run successfully', () => {
		const config = readProjectConfiguration(tree, schema.project);
		expect(config).toBeDefined();
	});
});
