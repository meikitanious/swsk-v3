import preprocessor from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocessor({
		scss: {
			prependData: "@import './src/lib/styles.scss';"
		}
	}),

	kit: {
		adapter: vercel({
			edge:false
		})
	}
};

export default config;
