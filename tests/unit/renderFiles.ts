const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');
import { SinonStub, stub } from 'sinon';
import * as mockery from 'mockery';

const templateStub: SinonStub = stub();
const testRenderData = {
	appName: 'testName'
};
const testFilesConfig = [{ src: 'test/a', dest: 'dest/a' }, { src: 'test/b', dest: 'dest/b' }];

let renderFiles: any;

registerSuite('renderFiles', {
	before() {
		mockery.enable({
			warnOnUnregistered: false
		});

		mockery.registerMock('./template', {
			default: templateStub
		});

		renderFiles = require('../../src/renderFiles');
	},
	after() {
		mockery.deregisterAll();
		mockery.disable();
	},
	beforeEach() {
		templateStub.reset();
	},

	tests: {
		async 'Should call template for each file in the config'() {
			await renderFiles.default(testFilesConfig, testRenderData);
			assert.equal(2, templateStub.callCount);
		},
		async 'Should call template with the src and dest from config'() {
			await renderFiles.default(testFilesConfig, testRenderData);
			const [file1, file2] = testFilesConfig;
			assert.isTrue(templateStub.firstCall.calledWithMatch(file1.src, file1.dest));
			assert.isTrue(templateStub.secondCall.calledWithMatch(file2.src, file2.dest));
		}
	}
});
