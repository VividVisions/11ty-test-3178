
export default (eleventyConfig) => {

	eleventyConfig.setServerOptions({
		// Does not work because directory import is not supported 
		// resolving ES modules.
		// module: 'custom-server'
		
		// Does not work because Eleventy tries to open 
		// ./node_modules/custom-server/server.js/package.json.
		module: 'custom-server/server.js'
	});

	return {
		dir: {
			input: 'site/src',
			output: 'site/dist'
		}
	};

}
