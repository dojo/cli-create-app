import { Command } from '@dojo/interfaces/cli';
import register from './register';
import run, { CreateAppArgs } from './run';

const command: Command<CreateAppArgs> = {
	description: 'scaffolds a new app',
	register,
	run
};

export default command;
