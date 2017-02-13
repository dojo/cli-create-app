import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import register from './../../src/register';
import * as sinon from 'sinon';

let sandbox: sinon.SinonSandbox;

registerSuite({
	name: 'register',
	'beforeEach'() {
		sandbox = sinon.sandbox.create();
	},
	'afterEach'() {
		sandbox.restore();
	},
	'Should add a yargs option for name'() {
		const options = sandbox.stub();
		register(options);
		assert.isTrue(options.calledOnce);
		assert.isTrue(options.firstCall.calledWithMatch('n', { 'alias': 'name' }));
	},
	'Should demand the name option'() {
		const options = sandbox.stub();
		register(options);
		assert.isTrue(options.firstCall.calledWithMatch('n', { 'demand': true }));
	}
});
