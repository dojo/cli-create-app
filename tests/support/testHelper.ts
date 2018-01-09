import { stub } from 'sinon';
import * as yargs from 'yargs';
import { Helper } from '@dojo/interfaces/cli';

export function getHelperStub(): Helper {
	return {
		context: {},
		yargs,
		command: {
			run: stub().returns(Promise.resolve()),
			exists: stub().returns(true),
			renderFiles: stub()
		},
		configuration: {
			set: stub().returns(Promise.resolve()),
			get: stub().returns(Promise.resolve())
		}
	};
}

const yargsFunctions = ['demand', 'usage', 'epilog', 'help', 'alias'];
export function getYargsStub() {
	const yargsStub: any = {};
	yargsFunctions.forEach((fnc) => {
		yargsStub[fnc] = stub().returns(yargsStub);
	});
	yargsStub.command = stub().callsArgWith(2, yargsStub);
	return yargsStub;
}

export function getCommandWrapper(name: string, runs: boolean = true) {
	const commandWrapper = {
		group: 'foo',
		name,
		description: 'test-description',
		register: stub().returns('registered'),
		run: stub().returns(runs ? Promise.resolve('success') : Promise.reject(new Error()))
	};
	return commandWrapper;
}
