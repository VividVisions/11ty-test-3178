
export default (eleventyConfig) => {

	eleventyConfig.setServerOptions({
		module: '@11ty/eleventy-server-browsersync',
	});

	return {
		dir: {
			input: 'site_src',
			output: 'site_dist'
		}
	};

}
