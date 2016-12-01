import createProjector from 'dojo-widgets/createProjector';
import d from 'dojo-widgets/d';
import createHelloWorld from './widgets/createHelloWorld';

const root = document.querySelector('my-app');
const projector = createProjector({ root });

projector.children = [ d(createHelloWorld) ];

projector.append().then(() => {
	console.log('Attached!');
});
