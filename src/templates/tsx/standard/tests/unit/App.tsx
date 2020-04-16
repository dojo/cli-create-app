const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { tsx } from '@dojo/framework/core/vdom';
import Outlet from '@dojo/framework/routing/Outlet';

import Menu from '../../src/widgets/Menu';
import Home from '../../src/widgets/Home';
import About from '../../src/widgets/About';
import Profile from '../../src/widgets/Profile';

import App from '../../src/App';
import * as css from '../../src/App.m.css';

describe('App', () => {
	it('default renders correctly', () => {
		const r = renderer(() => <App />);
		const baseAssertion = assertion(() => (
			<div classes={[css.root]}>
				<Menu />
				<Outlet id="main">
					{{
						home: <Home />,
						about: <About />,
						profile: <Profile username="Dojo User" />
					}}
				</Outlet>
			</div>
		));
		r.expect(baseAssertion);
	});
});
