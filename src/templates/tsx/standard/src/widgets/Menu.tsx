import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';
import Link from '@dojo/framework/routing/ActiveLink';
import Toolbar from '@dojo/widgets/toolbar';

import * as css from './styles/Menu.m.css';

export default class Menu extends WidgetBase {
	protected render() {
		return (
			<div classes={css.root}>
				<Toolbar heading="My Dojo App!" collapseWidth={600}>
					<Link to="home" classes={[css.link]} activeClasses={[css.selected]}>
						Home
					</Link>
					<Link to="about" classes={[css.link]} activeClasses={[css.selected]}>
						About
					</Link>
					<Link to="profile" classes={[css.link]} activeClasses={[css.selected]}>
						Profile
					</Link>
				</Toolbar>
			</div>
		);
	}
}
