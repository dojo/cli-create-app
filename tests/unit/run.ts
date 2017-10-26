import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import { getHelperStub } from '../support/testHelper';
import { Helper } from '@dojo/interfaces/cli';
import * as mockery from 'mockery';
import { SinonStub, stub } from 'sinon';

type ESModule = {
	default: any
};

const name = 'testAppName';
const args = { name };
const dirNames = [ name, name + '/tests' ];
const existsSyncStub: SinonStub = stub();
const createDirStub: SinonStub = stub();
const renderFilesStub: SinonStub = stub().returns(Promise.resolve());
const npmInstallStub: SinonStub = stub().returns(Promise.resolve());
const changeDirStub: SinonStub = stub();
const pkgDirStub: SinonStub = stub().returns(name);
const getDirectoryNamesStub: SinonStub = stub().returns(dirNames);
const getRenderFilesConfigStub: SinonStub = stub().returns(Promise.resolve());
const typingsInstallStub: SinonStub = stub().returns(Promise.resolve());
let consoleStub: SinonStub;
let helperStub: Helper;
let run: any;

registerSuite({
	name: 'run',
	'setup'() {
		consoleStub = stub(console, 'info');

		mockery.enable({ 'warnOnUnregistered': false });

		mockery.registerMock('fs-extra', { 'existsSync': existsSyncStub });
		mockery.registerMock('./createDir', { 'default': createDirStub });
		mockery.registerMock('./renderFiles', { 'default': renderFilesStub });
		mockery.registerMock('./npmInstall', { 'default': npmInstallStub });
		mockery.registerMock('./changeDir', { 'default': changeDirStub });
		mockery.registerMock('./config', {
			'getDirectoryNames': getDirectoryNamesStub,
			'getRenderFilesConfig': getRenderFilesConfigStub
		});
		mockery.registerMock('pkg-dir', { 'sync': pkgDirStub });

		run = (<ESModule> require('intern/dojo/node!./../../src/run')).default;
	},
	'teardown'() {
		consoleStub.restore();
		mockery.deregisterAll();
		mockery.disable();
	},
	'beforeEach'() {
		helperStub = getHelperStub();
		existsSyncStub.reset();
		existsSyncStub.returns(false);
		createDirStub.reset();
		renderFilesStub.reset();
		npmInstallStub.reset();
		changeDirStub.reset();
		getDirectoryNamesStub.reset();
		getRenderFilesConfigStub.reset();
		typingsInstallStub.reset();
		pkgDirStub.reset();
	},
	async 'Should check to see if target appName folder exists'() {
		existsSyncStub.returns(true);
		try {
			await run(helperStub, args);
			assert.fail(null, null, 'Should not get here');
		}
		catch (error) {
			assert.equal('App directory already exists', error.message);
			assert.isTrue(existsSyncStub.calledOnce);
			assert.isTrue(existsSyncStub.firstCall.calledWith(name));
		}
	},
	async 'Should get directories to create from config'() {
		await run(helperStub, args);
		assert.isTrue(getDirectoryNamesStub.calledOnce);
		assert.isTrue(createDirStub.calledOnce);
		assert.isTrue(createDirStub.firstCall.calledWith(...dirNames));
		assert.isTrue(createDirStub.calledAfter(existsSyncStub));
	},
	async 'Should change to the appname directory'() {
		await run(helperStub, args);
		assert.isTrue(changeDirStub.calledOnce);
		assert.isTrue(changeDirStub.firstCall.calledWith(name));
		assert.isTrue(changeDirStub.calledAfter(createDirStub));
	},
	async 'Should get files to ender from config'() {
		await run(helperStub, args);
		assert.isTrue(getRenderFilesConfigStub.calledOnce);
		assert.isTrue(renderFilesStub.calledOnce);
		assert.isTrue(renderFilesStub.calledAfter(changeDirStub));
	},
	async 'Should run npmInstall'() {
		await run(helperStub, args);
		assert.isTrue(npmInstallStub.calledOnce);
		assert.isTrue(npmInstallStub.calledAfter(renderFilesStub));
	},
	async 'Should run dojo init'() {
		await run(helperStub, args);
		assert.isTrue((helperStub.command.run as any).calledOnce);
		assert.deepEqual((helperStub.command.run as any).firstCall.args, [ '', 'init' ]);
	}
});
