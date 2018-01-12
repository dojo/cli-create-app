import { Command } from '@dojo/cli/interfaces';
import register from './register';
import run, { CreateAppArgs } from './run';

const command: Command<CreateAppArgs> = {
	description: 'scaffolds a new app',
	register,
	run
};

export default command;
