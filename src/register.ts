import { OptionsHelper } from '@dojo/cli/interfaces';

export default function(options: OptionsHelper): void {
	options('n', {
		alias: 'name',
		describe: 'The name of your application',
		demand: true,
		requiresArg: true,
		type: 'string'
	});
	options('s', {
		alias: 'skeleton',
		describe: 'Outputs a skeleton dojo project',
		default: false,
		type: 'boolean'
	});
	options('t', {
		alias: 'tsx',
		describe: 'Outputs a `tsx` dojo project',
		default: false,
		type: 'boolean'
	});
}
