import { Command, Helper } from './interfaces';
import { Argv } from 'yargs';

const command: Command = {
	description: 'Scaffolds a new command',
	register(helper) {
		return helper.yargs;
	},
	run(helper: Helper, args: Argv) {
		return Promise.resolve();
	}
};

export default command;
