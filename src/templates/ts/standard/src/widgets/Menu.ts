import { create, w, v } from '@dojo/framework/core/vdom';
import Link from '@dojo/framework/routing/ActiveLink';
import Header from '@dojo/widgets/header';

import * as css from './styles/Menu.m.css';

const factory = create();

export default factory(function Menu() {
	return w(Header, {}, [
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
	]);
});
