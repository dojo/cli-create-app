import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import * as css from './styles/Profile.m.css';

export interface ProfileProperties {
	username: string;
}

export default class Profile extends WidgetBase<ProfileProperties> {
	protected render() {
		const { username } = this.properties;
		return <h1 classes={[css.root]}>{`Welcome ${username}!`}</h1>;
	}
}
