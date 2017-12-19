import template from './template';

export type RenderFilesConfig = {
	src: string;
	dest: string;
}[];

export default function(renderFilesConfig: RenderFilesConfig, renderData: any) {
	renderFilesConfig.forEach(({ src, dest }) => {
		template(src, dest, renderData);
	});
}
