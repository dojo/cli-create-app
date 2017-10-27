const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');
import createDir from './../../src/createDir';
import * as fs from 'fs-extra';
import { stub, SinonStub } from 'sinon';

let mkdirsStub: SinonStub;
let consoleStub: SinonStub;

registerSuite('createDir', {
	before() {
		consoleStub = stub(console, 'info');
	},
	after() {
		consoleStub.restore();
	},
	beforeEach() {
		mkdirsStub = stub(fs, 'mkdirsSync');
	},
	afterEach() {
		mkdirsStub.restore();
	},

	tests: {
	'Should call mkdir when passed a path'() {
		const folderName = 'tmp/folder';
		createDir(folderName);
		assert.isTrue(mkdirsStub.calledOnce);
		assert.isTrue(mkdirsStub.firstCall.calledWith(folderName));
	},
	'Should call mkdir multiple times when passed multiple paths'() {
		const folderName1 = 'tmp/folder';
		const folderName2 = 'tmp/folder2';
		createDir(folderName1, folderName2);
		assert.isTrue(mkdirsStub.calledTwice);
		assert.isTrue(mkdirsStub.firstCall.calledWith(folderName1));
		assert.isTrue(mkdirsStub.secondCall.calledWith(folderName2));
	}
	}
});
