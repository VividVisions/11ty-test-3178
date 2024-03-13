
import EleventyDevServer from '@11ty/eleventy-dev-server';

export default class CustomServer extends EleventyDevServer {
	
	static getServer(...args) {
		return new CustomServer(...args);
	}

	constructor(...args) {
		super(...args);
		console.log('Custom Server');
	}

}
