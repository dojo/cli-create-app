import { w } from '@dojo/widget-core/d';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import HelloWorld, { HelloWorldProperties } from './widgets/HelloWorld';

export default class App extends WidgetBase<WidgetProperties> {

	private stranger = true;

	private toggleStranger(): void {
		this.stranger = !this.stranger;
		this.invalidate();
	}

	protected render(): DNode {
		const { stranger, toggleStranger } = this;

		return w<HelloWorld>(HelloWorld, { stranger, toggleStranger });
	}
}
