import { format, join, normalize, parse, relative } from 'path';
import * as glob from 'glob';

export function getDirectoryNames(appName: string, isSkeleton = false, isTsx = false): string[] {
	const templateDirectory = join(__dirname, 'templates', isTsx ? 'tsx' : 'ts', isSkeleton ? 'skeleton' : 'standard');
	const directories = glob.sync(join(templateDirectory, '**', '/')).map((directory) => {
		return join(appName, relative(templateDirectory, directory));
	});

	return [appName, ...directories];
}

export function stripTemplateFromFileName(filePath: string) {
	const path = parse(filePath);
	path.base = path.base.replace('template-', '');
	return normalize(format(path));
}

export function getRenderFilesConfig(isSkeleton = false, isTsx = false): { src: string; dest: string }[] {
	const templateDirectory = join(__dirname, 'templates', isTsx ? 'tsx' : 'ts', isSkeleton ? 'skeleton' : 'standard');
	const files = glob.sync(join(templateDirectory, '**'), { nodir: true, absolute: true });

	return files.map((file) => {
		return {
			src: file,
			dest: stripTemplateFromFileName(relative(templateDirectory, file))
		};
	});
}
