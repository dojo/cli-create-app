import { join } from 'path';

export function getDirectoryNames(appName: string): string[] {
	return [
		appName,
		`${appName}/src`,
		`${appName}/src/styles`,
		`${appName}/src/widgets`,
		`${appName}/tests`
	];
}

const fileNames = [
	'package.json',
	'typings.json',
	'tsconfig.json',
	'src/index.html',
	'src/main.ts',
	'src/main.styl',
	'src/widgets/createHelloWorld.ts',
	'tests/all.ts',
	'tests/main.ts'
];

export function getRenderFilesConfig(packagePath: string): {src: string, dest: string}[] {
	return fileNames.map((fileName) => {
		const fileNameParts = fileName.split('/');
		return {
			src: join(packagePath, 'templates', ...fileNameParts),
			dest: join(...fileNameParts)
		};
	});
}
