import WidgetBase from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';

import * as css from './styles/helloWorld.m.css';

const logo = require('./../img/logo.svg');

/**
 * A "Hello World" widget that renders a spinning Dojo 2 logo and the text "Hello, Dojo 2 World!".
 *
 * Refer to the creating widgets tutorial for help: https://dojo.io/tutorials/003_creating_widgets/
 */
export class HelloWorld extends WidgetBase {
	protected render() {
		return v('div', { classes: css.root }, [
			v('img', { src: logo, classes: css.logo }),
			v('div', { classes: css.label }, ['Hello, Dojo 2 World!'])
		]);
	}
}

export default HelloWorld;
