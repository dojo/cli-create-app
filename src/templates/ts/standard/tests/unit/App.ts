const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { v, w } from '@dojo/framework/core/vdom';
import Outlet from '@dojo/framework/routing/Outlet';

import Menu from '../../src/widgets/Menu';
import Home from '../../src/widgets/Home';
import About from '../../src/widgets/About';
import Profile from '../../src/widgets/Profile';

import App from '../../src/App';
import * as css from '../../src/App.m.css';

describe('App', () => {
	it('default renders correctly', () => {
		const r = renderer(() => w(App, {}));
		const baseAssertion = assertion(() =>
			v('div', { classes: [css.root] }, [
				w(Menu, {}),
				w(Outlet, { id: 'main' }, [
					{
						home: w(Home, {}),
						about: w(About, {}),
						profile: w(Profile, { username: 'Dojo User' })
					}
				])
			])
		);
		r.expect(baseAssertion);
	});
});
