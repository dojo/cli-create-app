import { create, v, w } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import Outlet from '@dojo/framework/routing/Outlet';
import dojo from '@dojo/widgets/theme/dojo';

import Menu from './widgets/Menu';
import Home from './widgets/Home';
import About from './widgets/About';
import Profile from './widgets/Profile';

import * as css from './App.m.css';

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	if (!theme.get()) {
		theme.set(dojo);
	}
	return v('div', { classes: [css.root] }, [
		w(Menu, {}),
		w(Outlet, { id: 'main' }, [
			{
				home: w(Home, {}),
				about: w(About, {}),
				profile: w(Profile, { username: 'Dojo User' })
			}
		])
	]);
});
