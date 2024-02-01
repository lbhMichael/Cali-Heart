import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	vite: {
		resolve: {
			alias: {
				'@/*': path.resolve('./src/*')
			}
		}
	},
	preprocess: vitePreprocess()
};
export default config;
