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
		describe: 'Will only output a skeleton project',
		default: false,
		type: 'boolean'
	});
	options('t', {
		alias: 'tsx',
		describe: 'Use a `tsx` version of the project',
		default: false,
		type: 'boolean'
	});
}
