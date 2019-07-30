import renderer, { v } from '@dojo/framework/core/vdom';

const r = renderer(() => v('div', ['Hello, Dojo World!']));
r.mount();
