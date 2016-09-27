import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import npmInstall from 'src/npmInstall';
import { stub, SinonStub } from 'sinon';
const cs: any = require('cross-spawn');
let spawnStub: SinonStub;
let spawnOnStub: SinonStub;

registerSuite({
	name: 'npmInstall',
	'beforeEach'() {
		spawnOnStub = stub();
		const spawnOnResponse = {
			'on': spawnOnStub
		};

		spawnOnStub.returns(spawnOnResponse);
		spawnStub = stub(cs, 'spawn').returns(spawnOnResponse);
	},
	'afterEach'() {
		spawnStub.restore();
	},
	async 'Should call spawn to run an npm process'() {
		spawnOnStub.onFirstCall().callsArg(1);
		await npmInstall();
		assert.isTrue(spawnStub.calledOnce);
	},
	async 'Should reject with an error when spawn throws an error'() {
		const errorMessage = 'test error message';
		spawnOnStub.onSecondCall().callsArgWith(1, new Error(errorMessage));
		try {
			await npmInstall();
			assert.fail(null, null, 'Should not get here');
		}
		catch (error) {
			assert.equal(errorMessage, error.message);
		}
	}
});
