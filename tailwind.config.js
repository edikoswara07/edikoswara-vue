const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			body: ["Quicksand", "Open Sans"],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			blueGray: colors.blueGray,
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
