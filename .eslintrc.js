module.exports = {
	root: true,
	extends: [
			"eslint:recommended",
			"plugin:react/recommended"
	],
	env: {
		browser: true,
		node: true,
		jasmine: true,
		es6: true
	},
	rules: {
		strict: 0,
		"no-inner-declarations": "off"
	},
		parserOptions: {
				sourceType: "module",
				ecmaVersion: 2020,
				ecmaFeatures: {
						jsx: true
				}
		}
};
