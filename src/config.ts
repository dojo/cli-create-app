import { join } from 'path';

export function getDirectoryNames(appName: string): string[] {
	return [
		appName,
		`${appName}/src`,
		`${appName}/src/styles`,
		`${appName}/tests`
	];
}

const fileNames = [
	'package.json',
	'typings.json',
	'tsconfig.json',
	'src/index.html',
	'src/app.ts',
	'src/styles/app.styl',
	'src/tests/all.ts',
	'src/tests/app.ts'
];

export function getRenderFilesConfig(packagePath: string) {
	return fileNames.map((fileName) => {
		const fileNameParts = fileName.split('/');
		return {
			src: join(packagePath, 'templates', ...fileNameParts),
			dest: join('.', ...fileNameParts)
		};
	});
}
