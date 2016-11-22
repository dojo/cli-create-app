import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import register from './../../src/register';
import { getHelperStub } from '../support/testHelper';
import { Helper } from 'dojo-cli/interfaces';
import { SinonStub, stub } from 'sinon';

let helperStub: Helper;
let optionStub: SinonStub;

registerSuite({
	name: 'register',
	'beforeEach'() {
		helperStub = getHelperStub<any>();
		optionStub = stub(helperStub.yargs, 'option');
	},
	'afterEach'() {
		optionStub.restore();
	},
	'Should add a yargs option for name'() {
		register(helperStub);
		assert.isTrue(optionStub.calledOnce);
		assert.isTrue(optionStub.firstCall.calledWithMatch('n', { 'alias': 'name' }));
	},
	'Should demand the name option'() {
		register(helperStub);
		assert.isTrue(optionStub.firstCall.calledWithMatch('n', { 'demand': true }));
	}
});
