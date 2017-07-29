import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import { SinonStub, stub } from 'sinon';
import * as mockery from 'mockery';

const copySyncStub: SinonStub = stub();

const testDirsConfig = [
	{ src: 'test/a', dest: 'dest/a' },
	{ src: 'test/b', dest: 'dest/b' }
];

let copyDirs: any;

registerSuite({
	name: 'copyDirs',
	'setup'() {
		mockery.enable({
			warnOnUnregistered: false
		});

		mockery.registerMock('fs-extra', {
			'copySync': copySyncStub
		});

		copyDirs = require('intern/dojo/node!./../../src/copyDirs');
	},
	'teardown'() {
		mockery.deregisterAll();
		mockery.disable();
	},
	'beforeEach'() {
		copySyncStub.reset();
	},
	async 'Should call copySync for each file in the config'() {
		await copyDirs.default(testDirsConfig);
		assert.equal(2, copySyncStub.callCount);
	},
	async 'Should call copySync with the src and dest from config and the recursive option set to true'() {
		await copyDirs.default(testDirsConfig);
		const [ file1, file2 ] = testDirsConfig;
		assert.isTrue(copySyncStub.firstCall.calledWithMatch(file1.src, file1.dest, { recursive: true }));
		assert.isTrue(copySyncStub.secondCall.calledWithMatch(file2.src, file2.dest, { recursive: true }));
	}
});
