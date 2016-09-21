import { Command, Helper } from './interfaces';
import { Argv } from 'yargs';
import createDir from './createDir';
import renderFiles, { RenderFilesConfig } from './renderFiles';
import npmInstall from './npmInstall';
import typingsInstall from './typingsInstall';
import { join } from 'path';
import * as chalk from 'chalk';
const pkgDir: any = require('pkg-dir');

export interface CreateAppArgs extends Argv {
	name: string;
}

const packagePath = pkgDir.sync(__dirname);

const command: Command = {
	description: 'Scaffolds a new command',
	register(helper: Helper) {
		helper.yargs.option('n', {
			alias: 'name',
			describe: 'The App Name to create',
			demand: true,
			type: 'string'
		});

		return helper.yargs;
	},
	async run(helper: Helper, args: CreateAppArgs) {
		const appName = args.name;

		console.info(chalk.bold(`Creating your new app: ${appName}\n`));

		const createFilesConfig = <RenderFilesConfig> require(join(packagePath, 'config/createFilesConfig.json'));

		// Make directories
		try {
			createDir(
				appName,
				`${appName}/src`,
				`${appName}/src/styles`,
				`${appName}/tests`
			);
		}
		catch (error) {
			// Shouldn't have to console here, why doesn't CLI output this?
			console.error(error.message);
			return Promise.reject(error);
		}

		process.chdir(appName);

		// Copy files
		await renderFiles(createFilesConfig, { appName });
		console.log('running npm install');
		await npmInstall();
		console.log('running typings install');
		await typingsInstall();

		console.info(chalk.green.bold('All done!'));

		return Promise.resolve();
	}
};

export default command;
