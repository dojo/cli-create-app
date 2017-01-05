import createProjector from 'dojo-widgets/createProjector';
import { w } from 'dojo-widgets/d';
import createHelloWorld from './widgets/createHelloWorld';

const root = document.querySelector('my-app') || undefined;
const projector = createProjector({ root });

projector.children = [ w(createHelloWorld, {}) ];

projector.append().then(() => {
	console.log('Attached!');
});
