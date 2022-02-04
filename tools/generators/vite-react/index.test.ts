import { Tree, addProjectConfiguration, readProjectConfiguration } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
// import generator from "./config.impl";
import { expect, test, assert, describe, beforeEach } from 'vitest';

describe('vite-react', () => {
	const projectName = 'vite-react';
	let host: Tree;

	beforeEach(() => {
		host = createTreeWithEmptyWorkspace();

		addProjectConfiguration(host, projectName, {
			projectType: 'application',
			root: `./apps/${projectName}`,
			sourceRoot: `./apps/${projectName}/src`,
			targets: {
				build: {
					executor: '@test/test:build',
					options: {
						test: 'test',
					},
				},
			},
		});
	});
	test('sanity test', () => {
		expect(1 + 1).toBe(2);
	});

	test('should run successfully', () => {
		const config = readProjectConfiguration(host, projectName);
		expect(config).toBeDefined();
	});
});
