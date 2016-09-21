const spawn: any = require('cross-spawn');

export default async function () {
	return new Promise((resolve, reject) => {
		spawn('npm', ['install'], { stdio: 'inherit' })
			.on('close', resolve)
			.on('error', (err: Error) => {
				console.error(err.message);
				reject(err);
			});
	});
}
