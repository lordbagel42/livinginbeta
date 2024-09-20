import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'scrollbar-thumb': '#888',
				'scrollbar-track': '#ddd'
			}
		}
	},
	daisyui: {
		themes: ['fantasy', 'business']
	},
	plugins: [daisyui, require('tailwind-scrollbar')({ nocompatible: true })]
};
