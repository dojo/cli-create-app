import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.querySelector('my-app') || undefined;

const Projector = ProjectorMixin(App);
const projector = new Projector();

projector.append(root);
registerServiceWorker();
