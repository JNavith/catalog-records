/*
	Tailwind - The Utility-First CSS Framework
	A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
	David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
	View the full documentation at https://tailwindcss.com.
*/

const { themeVariants, prefersDark, prefersLight } = require("tailwindcss-theme-variants");

const { orange, warmGray } = require("tailwindcss/colors");

module.exports = {
	purge: {
		content: ["./src/**/*.svelte", "./src/**/*.html"],
		options: {
			defaultExtractor: (content) => [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			keyframes: true,
		},
	},
	theme: {
		extend: {
			colors: {
				gray: warmGray,
				orange,
				blurple: "#7289DA",
			},
			fontFamily: {
				halloween: ["Creepster", "'Fredericka the Great'", "fantasy", "cursive"],
				personality: ["'Fredericka the Great'", "cursive"],
			},
		},
	},
	variants: {
		backgroundColor: ({ after }) => after(["themes", "themes:selection"]),
		textColor: ({ after }) => after(["themes"]),
	},
	plugins: [
		themeVariants({
			group: "themes",
			themes: {
				dark: {
					mediaQuery: prefersDark,
					semantics: {
						colors: {
							"orange-text": "orange-400",
							body: "black",
							card: "gray-900",
							"on-body": "gray-100",
							"on-card": "white",
							"entry-by": "gray-400",
							title: "white",
							blurb: "gray-300",
							"blurb-quotes": "gray-500",
							"blurb-divider": "gray-600",
						},
					},
				},
				light: {
					mediaQuery: prefersLight,
					semantics: {
						colors: {
							"orange-text": "orange-500",
							body: "gray-100",
							card: "white",
							"on-body": "gray-900",
							"on-card": "gray-900",
							title: "black",
							"entry-by": "gray-700",
							blurb: "gray-700",
							"blurb-quotes": "gray-300",
							"blurb-divider": "gray-200",
						},
					},
				},
			},
			fallback: "compact",
		}),
	],
};
