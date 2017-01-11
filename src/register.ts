import { Helper } from '@dojo/cli/interfaces';
import { Yargs } from 'yargs';

export default function(helper: Helper): Yargs {
	helper.yargs.option('n', {
		alias: 'name',
		describe: 'The name of your application',
		demand: true,
		type: 'string'
	});

	return helper.yargs;
}
