const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');
import changeDir from '../../src/changeDir';
import { stub, SinonStub } from 'sinon';

let changeDirStub: SinonStub;

registerSuite('changeDir', {
	before() {
		changeDirStub = stub(process, 'chdir');
	},
	after() {
		changeDirStub.restore();
	},

	tests: {
	'Should call process chdir with given path'() {
		const path = 'testPath';
		changeDir(path);
		assert.isTrue(changeDirStub.calledOnce);
		assert.isTrue(changeDirStub.firstCall.calledWith(path));
	}
	}
});
