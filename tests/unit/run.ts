import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import { getHelperStub } from '../support/testHelper';
import { Helper } from 'dojo-cli/interfaces';
import * as mockery from 'mockery';
import { SinonStub, stub } from 'sinon';

const existsSyncStub: SinonStub = stub();
let consoleStub: SinonStub;
let helperStub: Helper;
const name = 'testAppName';
const args = { name };

let run: any;

registerSuite({
	name: 'run',
	'setup'() {
		consoleStub = stub(console, 'info');

		mockery.enable({
			warnOnUnregistered: false
		});

		mockery.registerMock('fs-extra', {
			'existsSync': existsSyncStub
		});

		run = require('intern/dojo/node!./../../src/run');
	},
	'teardown'() {
		consoleStub.restore();
		mockery.deregisterAll();
		mockery.disable();
	},
	'beforeEach'() {
		helperStub = getHelperStub<any>();
		existsSyncStub.reset();
	},
	async 'Should check to see if target appName folder exists'() {
		existsSyncStub.returns(true);
		try {
			await run.default(helperStub, args);
			assert.fail(null, null, 'Should not get here');
		}
		catch (error) {
			assert.equal('App directory already exists', error.message);
			assert.isTrue(existsSyncStub.calledOnce);
			assert.isTrue(existsSyncStub.firstCall.calledWith(name));
		}
	}
});
