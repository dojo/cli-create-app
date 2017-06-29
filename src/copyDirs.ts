import { copySync } from 'fs-extra';
import { CreateFileConfig } from './config';

export default function (copyDirsConfig: CreateFileConfig[]) {
	copyDirsConfig.forEach(({ src, dest }) => {
		copySync(src, dest, { recursive: true });
	});
};
