import { join, parse, format } from 'path';

export function getDirectoryNames(appName: string): string[] {
	return [
		appName,
		`${appName}/src`,
		`${appName}/src/styles`,
		`${appName}/src/widgets`,
		`${appName}/src/widgets/styles`,
		`${appName}/tests`,
		`${appName}/tests/unit`,
		`${appName}/tests/unit/widgets`,
		`${appName}/tests/functional`,
		`${appName}/images`
	];
}

const fileNames = [
	'manifest.json',
	'package.json',
	'tsconfig.json',
	'.gitignore',
	'README.md',
	'src/index.html',
	'src/main.ts',
	'src/main.css',
	'src/App.ts',
	'src/registerServiceWorker.ts',
	'src/widgets/HelloWorld.ts',
	'src/widgets/styles/HelloWorld.m.css',
	'src/widgets/styles/HelloWorld.m.css.d.ts',
	'tests/unit/all.ts',
	'tests/unit/main.ts',
	'tests/unit/App.ts',
	'tests/unit/widgets/all.ts',
	'tests/unit/widgets/HelloWorld.ts',
	'tests/functional/all.ts',
	'tests/functional/main.ts',
	'images/app192.png',
	'images/app256.png',
	'images/app384.png',
	'images/app512.png'
];

export function stripTemplateFromFileName(filePath: string) {
	const path = parse(filePath);
	path.base = path.base.replace('.template', '');
	return format(path);
}

export function getRenderFilesConfig(packagePath: string): {src: string, dest: string}[] {
	return fileNames.map((fileName) => {
		const fileNameParts = fileName.split('/');
		return {
			src: join(packagePath, 'templates', ...fileNameParts),
			dest: stripTemplateFromFileName(join(...fileNameParts))
		};
	});
}
