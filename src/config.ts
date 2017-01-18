import { join } from 'path';

export function getDirectoryNames(appName: string): string[] {
	return [
		appName,
		`${appName}/src`,
		`${appName}/src/styles`,
		`${appName}/src/widgets`,
		`${appName}/tests`,
		`${appName}/tests/unit`,
		`${appName}/tests/functional`
	];
}

const fileNames = [
	'package.json',
	'typings.json',
	'tsconfig.json',
	'src/index.html',
	'src/main.ts',
	'src/main.css',
	'src/widgets/createHelloWorld.ts',
	'tests/unit/all.ts',
	'tests/unit/main.ts',
	'tests/functional/all.ts',
	'tests/functional/main.ts'
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
