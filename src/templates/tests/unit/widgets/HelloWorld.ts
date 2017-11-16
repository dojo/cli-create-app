const { describe, it } = intern.getInterface('bdd');
import harness from '@dojo/test-extras/harness';

import { v } from '@dojo/widget-core/d';

import HelloWorld from '../../../src/widgets/HelloWorld';
import * as css from '../../../src/widgets/styles/HelloWorld.m.css';

describe('HelloWorld', () => {
	it('should render widget', () => {
		const testHelloWorld = harness(HelloWorld);
		testHelloWorld.expectRender(v('div', { classes: css.root }, [
			v('img', { src: './img/logo.svg', classes: css.logo }),
			v('div', { classes: css.label }, [ 'Hello, Dojo 2 World!' ])
		]));
	});
});
