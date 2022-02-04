import { expect, test, assert, describe, beforeEach, it } from 'vitest';

import { getWorkspaceLayout, joinPathFragments, readProjectConfiguration, Tree } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { generateProjectBase, getProjectFolder } from '.';
import { MinimalReactVite } from './schema';

describe('MinimalReactVite', () => {
  const schema: MinimalReactVite = { name: 'test-threejs-app' };
  let tree: Tree;

  beforeEach(async () => {
    tree = createTreeWithEmptyWorkspace();
    await generateProjectBase(tree, schema);
  });

  it('should run successfully', () => {
    const config = readProjectConfiguration(tree, schema.name);
    expect(config).toBeDefined();
  });
  it('get WorkspaceLayout', async () => {
    const workspace = getWorkspaceLayout(tree);
    console.log(workspace);
    expect(workspace).toBeDefined();
  });
  it('get getProjectFolder', async () => {
    const workspace = getProjectFolder(schema);
    // console.log(workspace);
    expect(workspace).toBe('apps/test-threejs-app');
  });

  it.only('config path test', () => {
    const configFile = joinPathFragments(getProjectFolder(schema), 'vite.config.ts');
    console.log(configFile);
  });

  // test.only('modify config', async () => {
  // 	const config = updateProjectConfig(tree, schema);
  // 	expect(config).toBeTruthy();
  // });
});
