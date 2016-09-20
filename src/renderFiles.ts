// import { get as getPath, PathId } from './path';
// import template from './template';

export type RenderFilesConfig = [string, string, string, string][]

export default async function (renderFilesConfig: RenderFilesConfig, renderData: any) {
	// let renderPromises: Promise<void>[] = [];

	await renderFilesConfig.forEach(([srcBase, srcFile, destBase, destFile]) => {
		console.log(`${srcBase}, ${srcFile}, ${destBase}, ${destFile}`);
		// renderPromises.push(template(getPath(srcBase, srcFile), getPath(destBase, destFile), renderData));
	});

	// await Promise.all(renderPromises);
};
