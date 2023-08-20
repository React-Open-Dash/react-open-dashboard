module.exports = {
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
