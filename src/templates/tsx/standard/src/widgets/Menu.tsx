import { tsx, create } from '@dojo/framework/core/vdom';
import Link from '@dojo/framework/routing/ActiveLink';
import Header from '@dojo/widgets/header';

import * as css from './styles/Menu.m.css';

const factory = create();

export default factory(function Menu() {
	return (
		<div classes={css.root}>
			<Header>
				{{
					title: 'My Dojo App!',
					actions: (
						<virtual>
							<Link to="home" classes={[css.link]} activeClasses={[css.selected]}>
								Home
							</Link>
							<Link to="about" classes={[css.link]} activeClasses={[css.selected]}>
								About
							</Link>
							<Link to="profile" classes={[css.link]} activeClasses={[css.selected]}>
								Profile
							</Link>
						</virtual>
					)
				}}
			</Header>
		</div>
	);
});
