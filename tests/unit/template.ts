import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import template from 'src/template';
import * as fs from 'fs-extra';
import { stub, SinonStub } from 'sinon';

let writeFileStub: SinonStub;
let mkdirsStub: SinonStub;
let consoleStub: SinonStub;
const testEjsSrc = 'tests/support/template.ejs';
const testDest = '/tmp/test/destination';
const value = 'testValue';

registerSuite({
	'name': 'template',
	'setup'() {
		consoleStub = stub(console, 'info');
	},
	'teardown'() {
		consoleStub.restore();
	},
	'beforeEach'() {
		writeFileStub = stub(fs, 'writeFile').callsArg(2);
		mkdirsStub = stub(fs, 'mkdirsSync');
	},
	'afterEach'() {
		writeFileStub.restore();
		mkdirsStub.restore();
	},
	'can render ejs file'() {
		return template(testEjsSrc, testDest, { value }).then(function () {
			assert.strictEqual(writeFileStub.firstCall.args[1], value);
		});
	},
	'write file is called with dest path'() {
		return template(testEjsSrc, testDest, { value }).then(function () {
			assert.strictEqual(writeFileStub.firstCall.args[0], testDest);
		});
	}
});
