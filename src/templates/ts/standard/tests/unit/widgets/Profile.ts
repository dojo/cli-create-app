const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { w, v } from '@dojo/framework/core/vdom';

import Profile from '../../../src/widgets/Profile';
import * as css from '../../../src/widgets/styles/Profile.m.css';

describe('Profile', () => {
	it('default renders correctly', () => {
		const r = renderer(() => w(Profile, { username: 'Dojo User' }));
		const baseAssertion = assertion(() => v('h1', { classes: [css.root] }, ['Welcome Dojo User!']));
		r.expect(baseAssertion);
	});
});
