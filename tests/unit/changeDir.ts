import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import changeDir from 'src/changeDir';
import { stub, SinonStub } from 'sinon';

let changeDirStub: SinonStub;

registerSuite({
	name: 'changeDir',
	'setup'() {
		changeDirStub = stub(process, 'chdir');
	},
	'teardown'() {
		changeDirStub.restore();
	},
	'Should call process chdir with given path'() {
		const path = 'testPath';
		changeDir(path);
		assert.isTrue(changeDirStub.calledOnce);
		assert.isTrue(changeDirStub.firstCall.calledWith(path));
	}
});
