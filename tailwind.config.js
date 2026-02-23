/** @type {import('tailwindcss').Config} */
module.exports = {
	// content: ["./*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				'noto-jp': ['"Noto Sans JP"', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}
