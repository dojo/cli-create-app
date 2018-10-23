import { Helper } from '@dojo/cli/interfaces';
import createDir from './createDir';
import npmInstall from './npmInstall';
import changeDir from './changeDir';
import { getDirectoryNames, getRenderFilesConfig } from './config';
import chalk from 'chalk';
import { existsSync } from 'fs-extra';

export interface CreateAppArgs {
	name: string;
	skeleton: boolean;
	tsx: boolean;
}

export default async function(helper: Helper, args: CreateAppArgs) {
	const appName = args.name;
	const isSkeleton = args.skeleton;
	const isTsx = args.tsx;

	const scripts = {
		dev: 'dojo build --mode dev --watch file --serve',
		build: 'dojo build --mode dist',
		buildDev: `dojo build --mode dev`,
		test: 'dojo test',
		testUnit: 'dojo build --mode unit && dojo test --unit --config local',
		testFunctional: 'dojo build --mode functional && dojo test --functional --config local',
		testAll: 'dojo build --mode unit && dojo build --mode functional && dojo test --all --config local'
	};

	console.info(chalk.underline(`Creating your new app: ${appName}\n`));

	if (existsSync(appName)) {
		return Promise.reject(new Error('App directory already exists'));
	}

	console.info(chalk.underline('Creating Directories'));
	createDir(...getDirectoryNames(appName, isSkeleton, isTsx));

	changeDir(appName);

	console.info(chalk.underline('\nCreating Files'));
	helper.command.renderFiles(getRenderFilesConfig(isSkeleton, isTsx), { appName, scripts });

	console.info(chalk.underline('\nRunning npm install'));
	await npmInstall();

	console.info(chalk.underline('\nRunning dojo init'));
	await helper.command.run('init', '');

	console.info(chalk.green.bold('\nAll done!\n'));
}
