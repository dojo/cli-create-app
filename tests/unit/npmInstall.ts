const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');
import * as mockery from 'mockery';
import { stub, SinonStub } from 'sinon';
const cs: any = require('cross-spawn');
let spawnStub: SinonStub;
let spawnOnStub: SinonStub;
const stopAndPersistStub: SinonStub = stub();
const startStub: SinonStub = stub().returns({
	stopAndPersist: stopAndPersistStub
});
let npmInstall: any;

registerSuite('npmInstall', {
	before() {
		mockery.enable({
			warnOnUnregistered: false
		});

		mockery.registerMock('ora', () => {
			return {
				start: startStub
			};
		});

		npmInstall = require('../../src/npmInstall');
	},
	after() {
		mockery.deregisterAll();
		mockery.disable();
	},
	beforeEach() {
		spawnOnStub = stub();
		const spawnOnResponse = {
			on: spawnOnStub
		};

		startStub.reset();
		stopAndPersistStub.reset();
		spawnOnStub.returns(spawnOnResponse);
		spawnStub = stub(cs, 'spawn').returns(spawnOnResponse);
	},
	afterEach() {
		spawnStub.restore();
	},

	tests: {
		async 'Should call spawn to run an npm process'() {
			spawnOnStub.onFirstCall().callsArgWith(1, 0);
			await npmInstall.default();
			assert.isTrue(spawnStub.calledOnce);
		},
		async 'Should use a loading spinner'() {
			spawnOnStub.onFirstCall().callsArgWith(1, 0);
			await npmInstall.default();
			assert.isTrue(startStub.calledOnce, 'Should call start on the spinner');
			assert.isTrue(stopAndPersistStub.calledOnce, 'Should stop the spinner');
			assert.isTrue(
				stopAndPersistStub.firstCall.calledWithMatch('completed'),
				'Should persist completed message'
			);
		},
		async 'Should reject with an error when spawn throws an error'() {
			const errorMessage = 'test error message';
			spawnOnStub.onSecondCall().callsArgWith(1, new Error(errorMessage));
			try {
				await npmInstall.default();
				assert.fail(null, null, 'Should not get here');
			} catch (error) {
				assert.equal(error.message, errorMessage);
				assert.isTrue(stopAndPersistStub.calledOnce, 'Should stop the spinner');
				assert.isTrue(
					stopAndPersistStub.firstCall.calledWithMatch('failed'),
					'Should persis the failed message'
				);
			}
		},
		async 'Should reject with an error when spawn process returns an exit code !== 0'() {
			const errorExitCode = 1;
			spawnOnStub.onFirstCall().callsArgWith(1, errorExitCode);
			try {
				await npmInstall.default();
				assert.fail(null, null, 'Should not get here');
			} catch (error) {
				assert.equal(error.message, `exit code: ${errorExitCode}`);
				assert.isTrue(stopAndPersistStub.calledOnce, 'Should stop the spinner');
				assert.isTrue(
					stopAndPersistStub.firstCall.calledWithMatch('failed'),
					'Should persis the failed message'
				);
			}
		}
	}
});
