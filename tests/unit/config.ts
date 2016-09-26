import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import { getDirectoryNames, getRenderFilesConfig } from 'src/config';
import * as path from 'path';
import { spy, SinonSpy } from 'sinon';

const appName = 'testAppName';
const packagePath = 'testPackagePath';
let joinSpy: SinonSpy;

registerSuite({
	name: 'config',
	'beforeEach'() {
		joinSpy = spy(path, 'join');
	},
	'afterEach'() {
		joinSpy.restore();
	},
	'Should return directory names to create inside the specified app name'() {
		const folderNames = getDirectoryNames(appName);
		assert.equal(4, folderNames.length, 'length');
		folderNames.forEach((folderName: string) => {
			assert.isTrue(folderName.indexOf(appName) === 0, 'folder name should be within app folder');
		});
	},
	'Should return config of file names using the given package path'() {
		const renderFilesConfig = getRenderFilesConfig(packagePath);

		renderFilesConfig.forEach(({ src }) => {
			assert.isTrue(src.indexOf(packagePath) === 0, 'src should be within package path');
			assert.isTrue(src.indexOf('templates') > -1, 'src should be within templates folder');
		});

		assert.equal(renderFilesConfig.length * 2, joinSpy.callCount, 'join should be called twice for each file config');
	}
});
