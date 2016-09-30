import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as mockery from 'mockery';

const registerStub = () => {};
const runStub = () => {};
let main: any;

registerSuite({
	name: 'main',
	'setup'() {
		mockery.enable({
			warnOnUnregistered: false
		});

		mockery.registerMock('./run', {
			'default': runStub
		});

		mockery.registerMock('./register', {
			'default': registerStub
		});

		main = require('intern/dojo/node!./../../src/main');
	},
	'teardown'() {
		mockery.deregisterAll();
		mockery.disable();
	},
	'Should return a command matching the interface'() {
		const command = main.default;
		assert.isTrue(typeof command.description === 'string');
		assert.equal(runStub, command.run);
		assert.equal(registerStub, command.register);
	}
});
