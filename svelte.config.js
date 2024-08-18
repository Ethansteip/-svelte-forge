import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			out: 'build',
			precompress: false,
			// Optionally you can set the environment variable defaults here
			envPrefix: ['VITE_', 'RAILWAY_'],
			env: {
				port: process.env.PORT || 3000,
				host: '0.0.0.0'
			}
		})
	}
};

export default config;
