import createProjectorMixin from '@dojo/widget-core/mixins/createProjectorMixin';
import createHelloWorld from './widgets/createHelloWorld';

const root = document.querySelector('my-app') || undefined;

const projector = createHelloWorld.mixin(createProjectorMixin)({ root });

projector.append().then(() => {
	console.log('Attached!');
});
