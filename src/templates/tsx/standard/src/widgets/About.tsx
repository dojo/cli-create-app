import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import * as css from './styles/About.m.css';

export default class About extends WidgetBase {
	protected render() {
		return <h1 classes={[css.root]}>About Page</h1>;
	}
}
