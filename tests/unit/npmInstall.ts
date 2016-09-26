import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
// import npmInstall from 'src/npmInstall';
import { stub, SinonStub } from 'sinon';
import * as rewire from 'rewire';
const npmInstall: any = rewire('../../src/npmInstall');

const spawnStub: SinonStub = stub();
npmInstall.__set__('spawn', spawnStub);

registerSuite({
	name: 'npmInstall',
	'beforeEach'() {
		// spawnStub.reset();
	},
	'afterEach'() {
		// spawnStub.restore();
	},
	async 'Should call spawn to run an npm process'() {
		await npmInstall.default();
		assert.isTrue(spawnStub.calledOnce);
	}
});
