/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	daisyui: {
		themes: ["light", "dark", "luxury","dracula",],
	},
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			merriweather: '"Merriweather", serif',
			lato: '"Lato", sans-serif',
		},
		extend: {},
	},
	plugins: [require("daisyui")],
};
