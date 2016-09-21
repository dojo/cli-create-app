import { existsSync, mkdirsSync } from 'fs-extra';
import * as chalk from 'chalk';

export default function (...dirPath: string[]) {
	dirPath.forEach((path) => {
		if (!existsSync(path)) {
			console.info(chalk.green.bold('Creating Dir: ') + path);
			mkdirsSync(path);
		} else {
			throw new Error(`Directory already exists: ${path}`);
		}
	});
};
