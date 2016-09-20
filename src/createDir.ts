import { existsSync, mkdirsSync } from 'fs-extra';

export default function (...dirPath: string[]) {
	dirPath.forEach((path) => {
		if (!existsSync(path)) {
			mkdirsSync(path);
		} else {
			throw new Error(`Directory already exists: ${path}`);
		}
	});
};
