import renderer, { w } from '@dojo/framework/core/vdom';
import Registry from '@dojo/framework/core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';

import routes from './routes';
import App from './App';

const registry = new Registry();
registerRouterInjector(routes, registry);

const r = renderer(() => w(App, {}));
r.mount({ registry });
