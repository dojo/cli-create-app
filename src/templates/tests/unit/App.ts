import * as registerSuite from 'intern/lib/interfaces/object';
import { assert } from 'chai';
import { VNode } from '@dojo/interfaces/vdom';
import { spy, SinonSpy } from 'sinon';

import App from './../../src/App';
import HelloWorld from './../../src/widgets/HelloWorld';

let helloWorldSpy: SinonSpy;
let helloWorldSetPropertiesSpy: SinonSpy;

registerSuite({
	name: 'App',
	beforeEach() {
		helloWorldSpy = spy(HelloWorld);
		helloWorldSetPropertiesSpy = spy(HelloWorld.prototype, 'setProperties');
	},
	afterEach() {
		helloWorldSetPropertiesSpy.restore();
	},
	render() {
		const app = new App();
		const vnode = <VNode> app.__render__();
		assert.equal(vnode.vnodeSelector, 'div');
		assert.equal(helloWorldSetPropertiesSpy.getCall(0).args[0].stranger, true);
	}
});
