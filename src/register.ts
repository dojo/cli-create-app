import { OptionsHelper } from '@dojo/interfaces/cli';

export default function(options: OptionsHelper): void {
	options('n', {
		alias: 'name',
		describe: 'The name of your application',
		demand: true,
		requiresArg: true,
		type: 'string'
	});
}
