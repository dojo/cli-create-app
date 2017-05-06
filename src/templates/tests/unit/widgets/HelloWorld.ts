import * as registerSuite from 'intern/lib/interfaces/object';
import { assert } from 'chai';
import { VNode } from '@dojo/interfaces/vdom';

import HelloWorld from '../../../src/widgets/HelloWorld';
import * as css from '../../../src/widgets/styles/HelloWorld.m.css';

registerSuite({
	name: 'HelloWorld',
	'render'() {
		const helloWorld = new HelloWorld();

		const vnode = <VNode> helloWorld.__render__();
		assert.strictEqual(vnode.vnodeSelector, 'div');
		assert.equal(vnode.text, 'Hello, Dojo World!');
		assert.deepEqual(vnode.properties!.classes, { [css.hello]: true });
	},
	'render with stranger'() {
		const helloWorld = new HelloWorld();
		helloWorld.__setProperties__({
			stranger: true,
			toggleStranger: () => {}
		});

		const vnode = <VNode> helloWorld.__render__();
		assert.strictEqual(vnode.vnodeSelector, 'div');
		assert.equal(vnode.text, 'Hello, Dojo World!');
		assert.deepEqual(vnode.properties!.classes, { [css.hello]: true, [css.upsidedown]: true });
	}
});
