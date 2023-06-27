import TypographyComponent from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
	title: 'TypographyComponent',
	component: TypographyComponent,
	tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const defaultState = {
	args: {
		type: 'h1',
		weight: 'h2',
		fontSize: 'regular',
	},
};
