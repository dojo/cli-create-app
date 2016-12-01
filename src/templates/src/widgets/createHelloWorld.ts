import createWidgetBase from 'dojo-widgets/createWidgetBase';
import d from 'dojo-widgets/d';

const createHelloWorld = createWidgetBase.override({
	getChildrenNodes() {
		return [
			d('div', [ 'Hello, Dojo World!' ])
		];
	}
});

export default createHelloWorld;
