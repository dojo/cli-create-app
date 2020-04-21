const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { w, v } from '@dojo/framework/core/vdom';
import Link from '@dojo/framework/routing/ActiveLink';
import Header from '@dojo/widgets/header';

import Menu from '../../../src/widgets/Menu';
import * as css from '../../../src/widgets/styles/Menu.m.css';

describe('Menu', () => {
	it('default renders correctly', () => {
		const r = renderer(() => w(Menu, {}));
		const baseAssertion = assertion(() =>
			w(Header, {}, [
				{
					title: 'My Dojo App!',
					actions: v('virtual', [
						w(
							Link,
							{
								to: 'home',
								classes: [css.link],
								activeClasses: [css.selected]
							},
							['Home']
						),
						w(
							Link,
							{
								to: 'about',
								classes: [css.link],
								activeClasses: [css.selected]
							},
							['About']
						),
						w(
							Link,
							{
								to: 'profile',
								classes: [css.link],
								activeClasses: [css.selected]
							},
							['Profile']
						)
					])
				}
			])
		);
		r.expect(baseAssertion);
	});
});
