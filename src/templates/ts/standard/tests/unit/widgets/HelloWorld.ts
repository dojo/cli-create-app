const { describe, it } = intern.getInterface('bdd');
import harness from '@dojo/framework/testing/harness';

import { v, w } from '@dojo/framework/widget-core/d';

import HelloWorld from '../../../src/widgets/HelloWorld';
import * as css from '../../../src/widgets/styles/helloWorld.m.css';

const logo = require('./../../../src/img/logo.svg');

describe('HelloWorld', () => {
	it('should render widget', () => {
		const h = harness(() => w(HelloWorld, {}));
		h.expect(() =>
			v('div', { classes: css.root }, [
				v('img', { src: logo, classes: css.logo }),
				v('div', { classes: css.label }, ['Hello, Dojo World!'])
			])
		);
	});
});
