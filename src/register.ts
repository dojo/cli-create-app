export default function(options: (key: string, options: Options) => void): void {
	options('n', {
		alias: 'name',
		describe: 'The name of your application',
		demand: true,
		type: 'string'
	});
}
