import { Argv } from 'yargs';
import { Helper } from '@dojo/interfaces/cli';
import createDir from './createDir';
import renderFiles from './renderFiles';
import npmInstall from './npmInstall';
import changeDir from './changeDir';
import { getDirectoryNames, getRenderFilesConfig } from './config';
import * as chalk from 'chalk';
import { existsSync } from 'fs-extra';
import dirname from './dirname';

const pkgDir: any = require('pkg-dir');
const packagePath = pkgDir.sync(dirname);

export interface CreateAppArgs {
	name: string;
}

export default async function(helper: Helper, args: CreateAppArgs) {
	const appName = args.name;

	console.info(chalk.underline(`Creating your new app: ${appName}\n`));

	if (existsSync(appName)) {
		return Promise.reject(new Error('App directory already exists'));
	}

	console.info(chalk.underline('Creating Directories'));
	createDir(...getDirectoryNames(appName));

	changeDir(appName);

	console.info(chalk.underline('\nCreating Files'));
	renderFiles(getRenderFilesConfig(packagePath), { appName });

	console.info(chalk.underline('\nRunning npm install'));
	await npmInstall();

	console.info(chalk.green.bold('\nAll done!\n'));
}
