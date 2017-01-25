import createWidgetBase from '@dojo/widget-core/createWidgetBase';
import { v } from '@dojo/widget-core/d';

const createHelloWorld = createWidgetBase.override({
	getChildrenNodes() {
		return [
			v('div', [ 'Hello, Dojo World!' ])
		];
	}
});

export default createHelloWorld;
