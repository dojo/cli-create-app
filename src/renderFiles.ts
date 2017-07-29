import template from './template';
import { CreateFileConfig } from './config';

export default function (renderFilesConfig: CreateFileConfig[], renderData: any) {
	renderFilesConfig.forEach(({ src, dest }) => {
		template(src, dest, renderData);
	});
};
