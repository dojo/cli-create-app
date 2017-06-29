import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import {
	CreateFileConfig,
	getCopyDirsConfig, getDirectoryNames, getRenderFilesConfig,
	stripTemplateFromFileName
} from './../../src/config';
import * as path from 'path';
import { spy, SinonSpy } from 'sinon';

const appName = 'testAppName';
const packagePath = 'testPackagePath';
let joinSpy: SinonSpy;

function assertFilePaths(fileConfigs: CreateFileConfig[], packagePath: string) {
	fileConfigs.forEach(({ src }) => {
		assert.isTrue(src.indexOf(packagePath) === 0, 'src should be within package path');
		assert.isTrue(src.indexOf('templates') > -1, 'src should be within templates folder');
	});

	assert.equal(fileConfigs.length * 2, joinSpy.callCount, 'join should be called twice for each file config');
}

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
		assert.equal(9, folderNames.length, 'length');
		folderNames.forEach((folderName: string) => {
			assert.isTrue(folderName.indexOf(appName) === 0, 'folder name should be within app folder');
		});
	},
	'Should strip .template from fileName'() {
		assert.equal(
			stripTemplateFromFileName('/foo/bar/.gitignore.template'), path.format(path.parse('/foo/bar/.gitignore'))
		);
	},
	'Should return config of file names using the given package path'() {
		const renderFilesConfig = getRenderFilesConfig(packagePath);

		assertFilePaths(renderFilesConfig, packagePath);
	},

	'Should return config of directory names using the given package path'() {
		const copyDirsConfig = getCopyDirsConfig(packagePath);

		assertFilePaths(copyDirsConfig, packagePath);
	}
});
