/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			black: '#454545',
			'orange-50': '#FF6000',
			'orange-20': '#FFA559'
		},
		extend: {
			fontFamily: {
				sans: ['Voltaire', 'sans-serif']
			},
			fontWeight: {
				normal: 400
			},
			fontStyle: {
				normal: 'normal'
			},
			fontSize: {
				h1: '3rem',
				h2: '2.488rem',
				h3: '2.074rem',
				p: '1rem'
			}
		}
	},
	plugins: []
};
