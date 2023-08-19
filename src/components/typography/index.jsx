import React from 'react';
import PropTypes from 'prop-types';
import styles from './typography.module.scss';

/**
 * <p>**DOCS**</p>
 * The Typography component is one of the central components of every application, in this case, the Typhography,
 * should support all the styles mentioned in [Figma | Typhography](https://www.figma.com/file/lfO8GTUs6EUmD5cRCDFx0z/Untitled?type=design&node-id=11-55&t=tWEDyjDkH7T1UQk0-4) - **h1, h2, h3, h4, h5, h6, regular, regular-bold, small**.
 * That mentioned, the requirements of the components are the following; <br>
 * <p>**REQUIREMENTS**</p>
 * 1. This component must be created following the designs described in [Figma | Typhography](https://www.figma.com/file/lfO8GTUs6EUmD5cRCDFx0z/Untitled?type=design&node-id=11-55&t=tWEDyjDkH7T1UQk0-4)
 * 2. This component must supoport al the types described in the figma file, this includes; **H1, H2, H3, H4, H5, H6, REGULR, REGULAR-BOLD, SMALL**
 * 3. The font size must be calculated taking the base font-size of the page which is 14px, and the corresponding size foreach font type should be calculated using "rem".
 * 4. Even if every type of Typography has their own size and color and weigth,...etc, this should be customizable using props.
 * 5. The component must be typed using prop-types.
 * 6. The component styles should be created using scss modules, also, the scss should use the architecture BEM.
 * 7. This component should be tested — jest and react testing library already installed, have a look in a tutorial.
 * 8. The component should be described and integrated in story book.
 */
const TypographyComponent = ({ type = 'regular', fontSize, children }) => {
	const style = fontSize ?? type;
	const render = {
		h1: <h1 className={styles[style]}>{children}</h1>,
		h2: <h2 className={styles[style]}>{children}</h2>,
		h3: <h3 className={styles[style]}>{children}</h3>,
		h4: <h4 className={styles[style]}>{children}</h4>,
		h5: <h5 className={styles[style]}>{children}</h5>,
		h6: <h6 className={styles[style]}>{children}</h6>,
		regular: <p className={styles[style]}>{children}</p>,
		regularBold: <strong className={styles[style]}>{children}</strong>,
		small: <small className={styles[style]}>{children}</small>,
	};

	return render[type];
};

TypographyComponent.propTypes = {
	/**
	 * One of h1,h2,h3,h4,h5,h6,regular,regularBold,small
	 * It defines the right tag to use and styles,
	 * the fontSizes are responsive, all font sinzes are relative
	 * to the body of the page.
	 */
	type: PropTypes.string,
	/**
	 * Defines the style of the fonts
	 */
	fontSize: PropTypes.string,
	/**
	 * Some code
	 */
	children: PropTypes.any,
};

export default TypographyComponent;
