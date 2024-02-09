import { sveltekit } from '@sveltejs/kit/vite';
<<<<<<< HEAD
import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
=======
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
>>>>>>> master
});
