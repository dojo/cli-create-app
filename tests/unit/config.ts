const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');
import { getDirectoryNames, getRenderFilesConfig, stripTemplateFromFileName } from './../../src/config';
import * as path from 'path';

const pkgDir: any = require('pkg-dir');
const packagePath = pkgDir.sync(__dirname);
const appName = 'testAppName';

registerSuite('config', {
	tests: {
		'Should return directory names to create inside the specified app name'() {
			let folderNames = getDirectoryNames(appName);
			assert.equal(8, folderNames.length, 'length');
			folderNames.forEach((folderName: string) => {
				assert.isTrue(folderName.indexOf(appName) === 0, 'folder name should be within app folder');
			});
			folderNames = getDirectoryNames(appName, true);
			assert.equal(5, folderNames.length, 'length');
			folderNames.forEach((folderName: string) => {
				assert.isTrue(folderName.indexOf(appName) === 0, 'folder name should be within app folder');
			});
			folderNames = getDirectoryNames(appName, false, true);
			assert.equal(8, folderNames.length, 'length');
			folderNames.forEach((folderName: string) => {
				assert.isTrue(folderName.indexOf(appName) === 0, 'folder name should be within app folder');
			});
			folderNames = getDirectoryNames(appName, true, true);
			assert.equal(5, folderNames.length, 'length');
			folderNames.forEach((folderName: string) => {
				assert.isTrue(folderName.indexOf(appName) === 0, 'folder name should be within app folder');
			});
		},
		'Should strip "template-" from fileName'() {
			assert.equal(
				stripTemplateFromFileName('/foo/bar/template-.gitignore'),
				`${path.sep}foo${path.sep}bar${path.sep}.gitignore`
			);
		},
		'Should return config of file names using the given package path'() {
			let renderFilesConfig = getRenderFilesConfig();
			renderFilesConfig.forEach(({ src }) => {
				assert.isTrue(src.indexOf(packagePath) === 0, 'src should be within package path');
				assert.isTrue(src.indexOf('templates') > -1, 'src should be within templates folder');
			});
			renderFilesConfig = getRenderFilesConfig(true);
			renderFilesConfig.forEach(({ src }) => {
				assert.isTrue(src.indexOf(packagePath) === 0, 'src should be within package path');
				assert.isTrue(src.indexOf('templates') > -1, 'src should be within templates folder');
			});
			renderFilesConfig = getRenderFilesConfig(false, true);
			renderFilesConfig.forEach(({ src }) => {
				assert.isTrue(src.indexOf(packagePath) === 0, 'src should be within package path');
				assert.isTrue(src.indexOf('templates') > -1, 'src should be within templates folder');
			});
			renderFilesConfig = getRenderFilesConfig(true, true);
			renderFilesConfig.forEach(({ src }) => {
				assert.isTrue(src.indexOf(packagePath) === 0, 'src should be within package path');
				assert.isTrue(src.indexOf('templates') > -1, 'src should be within templates folder');
			});
		}
	}
});
