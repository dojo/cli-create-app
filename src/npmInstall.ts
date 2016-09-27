const cs: any = require('cross-spawn');

export default async function () {
	return new Promise((resolve, reject) => {
		cs.spawn('npm', ['install'], { stdio: 'inherit' })
			.on('close', resolve)
			.on('error', (err: Error) => {
				reject(err);
			});
	});
}
