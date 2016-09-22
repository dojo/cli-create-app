import template from './template';

export type RenderFilesConfig = {
	src: string;
	dest: string;
}[];

export default async function (renderFilesConfig: RenderFilesConfig, renderData: any) {
	await renderFilesConfig.forEach(({ src, dest }) => {
		template(src, dest, renderData);
	});
};
