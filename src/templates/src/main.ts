import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import App from './widgets/HelloWorld';

const Projector = ProjectorMixin(App);
const projector = new Projector();

projector.append();
