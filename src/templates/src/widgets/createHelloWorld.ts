import createWidgetBase from '@dojo/widgets/createWidgetBase';
import { v } from '@dojo/widgets/d';

const createHelloWorld = createWidgetBase.override({
	getChildrenNodes() {
		return [
			v('div', [ 'Hello, Dojo World!' ])
		];
	}
});

export default createHelloWorld;
