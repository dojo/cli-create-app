import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';
import Outlet from '@dojo/framework/routing/Outlet';

import Menu from './widgets/Menu';
import Home from './widgets/Home';
import About from './widgets/About';
import Profile from './widgets/Profile';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	protected render() {
		return (
			<div classes={[css.root]}>
				<Menu />
				<div>
					<Outlet key="home" id="home" renderer={() => <Home />} />
					<Outlet key="about" id="about" renderer={() => <About />} />
					<Outlet key="profile" id="profile" renderer={() => <Profile username="Dojo User" />} />
				</div>
			</div>
		);
	}
}
