import { v } from '@dojo/widget-core/d';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import * as css from './styles/HelloWorld.m.css';

/**
 * A themed "Hello World" widget that renders a spinning Dojo 2 logo and the text
 * "Hello, Dojo 2 World!".
 *
 * Refer to these tutorials for more help with creating a themed widget:
 * 	- Creating widgets, https://dojo.io/tutorials/003_creating_widgets/
 * 	- Theming widgets, https://dojo.io/tutorials/007_theming/
 */
@theme(css)
export class HelloWorld extends ThemeableMixin(WidgetBase) {
	/**
	 * Override WidgetBase#render to produce a virtual DOM tree.
	 * @returns {HNode} Each time render() executes, it should build the entire virtual DOM tree.
	 */
	protected render() {
		// Use WidgetBase#classes() to assign CSS classnames from the theme to the virtual DOM nodes.
		return v('div', { classes: this.classes(css.root) }, [
			v('img', { src: './img/logo.svg', classes: this.classes(css.logo) }),
			v('div', { classes: this.classes(css.label) }, [ 'Hello, Dojo 2 World!' ])
		]);
	}
}

export default HelloWorld;
