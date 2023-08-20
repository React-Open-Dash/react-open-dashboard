import React from 'react';
import { render, screen } from '@testing-library/react';
import TypographyComponent from './index';

describe('Typography component', () => {
	test('should render a component', () => {
		const rendered = render(<TypographyComponent />);
		expect(rendered).toBeTruthy();
	});

	test('should return the correct heading tag when called with prop type=""', () => {
		const renderProps = {
			h1: 1,
			h2: 2,
			h3: 3,
			h4: 4,
			h5: 5,
			h6: 6,
		};

		for (const [type, level] of Object.entries(renderProps)) {
			render(<TypographyComponent type={type} />);
			const current = screen.getByRole('heading', { level });
			expect(current).toBeTruthy();
		}
	});

	test('should return <p> tag when the type is "regular"', () => {
		render(<TypographyComponent type='regular'>Some text</TypographyComponent>);
		const current = screen.getByText('Some text');

		expect(current.tagName).toBe('P');
	});

	test('should return <strong> tag when the type is "regularBold"', () => {
		render(
			<TypographyComponent type='regularBold'>Some text</TypographyComponent>
		);
		const current = screen.getByText('Some text');
		expect(current.tagName).toBe('STRONG');
	});

	test('should return <small> tag when the type is "small"', () => {
		render(<TypographyComponent type='small'>Some text</TypographyComponent>);
		const current = screen.getByText('Some text');
		expect(current.tagName).toBe('SMALL');
	});

	test('should return <p> tag when type is not provided', () => {
		render(<TypographyComponent>Some text</TypographyComponent>);
		const current = screen.getByText('Some text');
		expect(current.tagName).toBe('P');
	});
});
