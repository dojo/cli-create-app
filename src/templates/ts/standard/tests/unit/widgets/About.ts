const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { w, v } from '@dojo/framework/core/vdom';

import About from '../../../src/widgets/About';
import * as css from '../../../src/widgets/styles/About.m.css';

describe('About', () => {
	it('default renders correctly', () => {
		const r = renderer(() => w(About, {}));
		const baseAssertion = assertion(() => v('h1', { classes: [css.root] }, ['About Page']));
		r.expect(baseAssertion);
	});
});
