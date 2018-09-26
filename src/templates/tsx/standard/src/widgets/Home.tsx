import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import * as css from './styles/Home.m.css';

export default class Home extends WidgetBase {
	protected render() {
		return <h1 classes={[css.root]}>Home Page</h1>;
	}
}
