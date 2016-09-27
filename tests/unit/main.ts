import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as mockery from 'mockery';

mockery.enable({
	warnOnUnregistered: false
});

const runStub = () => {};
mockery.registerMock('./run', {
	'default': runStub
});

const registerStub = () => {};
mockery.registerMock('./register', {
	'default': registerStub
});

const main: any = require('intern/dojo/node!./../../src/main');

registerSuite({
	name: 'main',
	'teardown'() {
		mockery.disable();
	},
	'Should return a command matching the interface'() {
		const command = main.default;
		assert.isTrue(typeof command.description === 'string');
		assert.equal(runStub, command.run);
		assert.equal(registerStub, command.register);
	}
});
