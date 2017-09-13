import { v } from '@dojo/widget-core/d';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import * as css from './styles/HelloWorld.m.css';

@theme(css)
export class HelloWorld extends ThemeableMixin(WidgetBase) {

	protected render() {
		return v('div', { classes: this.classes(css.root) }, [
			v('img', { src: './img/logo.svg', classes: this.classes(css.logo) }),
			v('div', { classes: this.classes(css.label) }, [ 'Hello, Dojo 2 World!' ])
		]);
	}
}

export default HelloWorld;
