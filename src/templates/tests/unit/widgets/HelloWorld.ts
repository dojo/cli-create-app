const { describe, it } = intern.getInterface('bdd');
import harness from '@dojo/test-extras/harness';

import { v } from '@dojo/widget-core/d';

import HelloWorld from '../../../src/widgets/HelloWorld';
import * as css from '../../../src/widgets/styles/helloWorld.m.css';

const logo = require('./../../../src/img/logo.svg');

describe('HelloWorld', () => {
	it('should render widget', () => {
		const testHelloWorld = harness(HelloWorld);
		testHelloWorld.expectRender(
			v('div', { classes: css.root }, [
				v('img', { src: logo, classes: css.logo }),
				v('div', { classes: css.label }, ['Hello, Dojo 2 World!'])
			])
		);
	});
});
