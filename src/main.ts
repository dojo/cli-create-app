import { Command, Helper } from './interfaces';
import { Argv } from 'yargs';
import createDir from './createDir';
import renderFiles from './renderFiles';
import npmInstall from './npmInstall';
import typingsInstall from './typingsInstall';
import { getDirectoryNames, getRenderFilesConfig } from './config';
import * as chalk from 'chalk';
import { existsSync } from 'fs-extra';
const pkgDir: any = require('pkg-dir');
const packagePath = pkgDir.sync(__dirname);

export interface CreateAppArgs extends Argv {
	name: string;
}

const command: Command = {
	description: 'Scaffolds a new command',
	register(helper: Helper) {
		helper.yargs.option('n', {
			alias: 'name',
			describe: 'The name of your application',
			demand: true,
			type: 'string'
		});

		return helper.yargs;
	},
	async run(helper: Helper, args: CreateAppArgs) {
		const appName = args.name;

		console.info(chalk.underline(`Creating your new app: ${appName}\n`));

		// Check app folder does not already exist
		if (existsSync(appName)) {
			return Promise.reject(new Error('App directory already exists'));
		}

		// Make directories
		console.info(chalk.underline('Creating Directories'));
		createDir(...getDirectoryNames(appName));

		process.chdir(appName);

		// Copy files
		console.info(chalk.underline('\nCreating Files'));
		await renderFiles(getRenderFilesConfig(packagePath), { appName });

		console.info(chalk.underline('\n Running npm install'));
		await npmInstall();

		console.info(chalk.underline('\n Running typings install'));
		await typingsInstall();

		console.info(chalk.green.bold('\nAll done!\n'));

		return Promise.resolve();
	}
};

export default command;
