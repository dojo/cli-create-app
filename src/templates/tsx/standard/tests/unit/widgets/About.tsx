const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { tsx } from '@dojo/framework/core/vdom';

import About from '../../../src/widgets/About';
import * as css from '../../../src/widgets/styles/About.m.css';

describe('About', () => {
	it('default renders correctly', () => {
		const r = renderer(() => <About />);
		const baseAssertion = assertion(() => <h1 classes={[css.root]}>About Page</h1>);
		r.expect(baseAssertion);
	});
});
