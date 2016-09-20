import { Command, Helper } from './interfaces';
import { Argv } from 'yargs';
import createDir from './createDir';
import renderFiles, { RenderFilesConfig } from './renderFiles';
import { join } from 'path';
// const pkgDir = require('pkg-dir');

export interface CreateAppArgs extends Argv {
	name: string;
}

export interface CreateConfig {
	name: string;
	modules: ModuleConfigMap;
	typings: TypingsConfigMap;
	globalTypings: TypingsConfigMap;
}

export interface ModuleConfigMap {
	[ moduleId: string ]: ModuleConfig;
}

export interface ModuleConfig {
	version: string;
	packageLocation?: string;
	packageName?: string;
}

export interface TypingsConfigMap {
	[ moduleId: string ]: string;
}

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
	run(helper: Helper, args: CreateAppArgs) {
		const appName = args.name;

		// const createModulesConfig: CreateConfig = require(getPath('config', 'createModulesConfig.json'));
		const createFilesConfig = <RenderFilesConfig> require(join(__dirname, './config/createFilesConfig.json'));

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

		// Copy files
		renderFiles(createFilesConfig, { appName } /*, createModulesConfig*/);

		return Promise.resolve();
	}
};

export default command;
