import { Helper, OptionsHelper } from 'dojo-cli/interfaces';

export default function(helper: Helper, options: OptionsHelper): void {
	options('n', {
		alias: 'name',
		describe: 'The name of your application',
		demand: true,
		type: 'string'
	});
}
