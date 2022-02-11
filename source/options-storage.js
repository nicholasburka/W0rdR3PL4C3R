import OptionsSync from 'webext-options-sync';

export default new OptionsSync({
	defaults: {
		colorRed: 244,
		colorGreen: 67,
		colorBlue: 54,
		text: 'Set a text!',
		word: 'releases',
		replacer: 'shmeleases'
	},
	migrations: [
		OptionsSync.migrations.removeUnused,
	],
	logging: true,
});
