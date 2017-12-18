import { red, green } from 'chalk';
const cs: any = require('cross-spawn');
const ora: any = require('ora');

export default async function() {
	return new Promise((resolve, reject) => {
		const spinner = ora({
			spinner: 'dots',
			color: 'white',
			text: 'npm install'
		}).start();
		cs
			.spawn('npm', ['install'], { stdio: 'ignore' })
			.on('exit', function(code: Number) {
				if (code !== 0) {
					spinner.stopAndPersist(red.bold(' failed'));
					reject(new Error(`exit code: ${code}`));
				} else {
					spinner.stopAndPersist(green.bold(' completed'));
					resolve();
				}
			})
			.on('error', (err: Error) => {
				spinner.stopAndPersist(red.bold(' failed'));
				reject(err);
			});
	});
}
