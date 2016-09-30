const cs: any = require('cross-spawn');

export default async function () {
	return new Promise((resolve, reject) => {
		cs.spawn('npm', ['install'], { stdio: null })
			.on('close', resolve)
			.on('error', (err: Error) => {
				reject(err);
			});
	});
}
