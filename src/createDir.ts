import { mkdirsSync } from 'fs-extra';
import chalk from 'chalk';

export default function(...dirPath: string[]) {
	dirPath.forEach((path) => {
		console.info(chalk.green.bold(' create ') + path);
		mkdirsSync(path);
	});
}
