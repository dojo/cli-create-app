const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { tsx } from '@dojo/framework/core/vdom';
import Link from '@dojo/framework/routing/ActiveLink';
import Header from '@dojo/widgets/header';

import Menu from '../../../src/widgets/Menu';
import * as css from '../../../src/widgets/styles/Menu.m.css';

describe('Menu', () => {
	it('default renders correctly', () => {
		const r = renderer(() => <Menu />);
		const baseAssertion = assertion(() => (
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
		));
		r.expect(baseAssertion);
	});
});
