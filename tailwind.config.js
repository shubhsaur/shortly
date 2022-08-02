/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			primaryCyan: "hsl(var(--primaryCyan))",
			primaryViolet: "hsl(var(--primaryViolet))",
			secRed: "hsl(var(--secRed))",
			neutralGray: "hsl(var(--neutralGray))",
			neutralGrayishViolet: "hsl(var(--neutralGrayishViolet))",
			neutralVeryDarkBlue: "hsl(var(--neutralVeryDarkBlue))",
			neutralVeryDarkViolet: "hsl(var(--neutralVeryDarkViolet))",
		},
	},
	plugins: [],
};
