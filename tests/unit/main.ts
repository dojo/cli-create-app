const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');
import * as mockery from 'mockery';

const registerStub = () => {};
const runStub = () => {};
let main: any;

registerSuite('main', {
	before() {
		mockery.enable({
			warnOnUnregistered: false
		});

		mockery.registerMock('./run', {
			'default': runStub
		});

		mockery.registerMock('./register', {
			'default': registerStub
		});

		main = require('../../src/main');
	},
	after() {
		mockery.deregisterAll();
		mockery.disable();
	},

	tests: {
	'Should return a command matching the interface'() {
		const command = main.default;
		assert.isTrue(typeof command.description === 'string');
		assert.equal(runStub, command.run);
		assert.equal(registerStub, command.register);
	}
	}
});
