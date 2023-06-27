import React from 'react';
import PropTypes from 'prop-types';

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
 * 7. sThis component should be tested — jest and react testing library already installed, have a look in a tutorial.
 * 8. The component should be described and integrated in story book.
 */
const TypographyComponent = ({
	type = 'h1',
	weight = '600',
	fontSize = 'h1',
}) => {
	return <div>TypographyComponent</div>;
};

TypographyComponent.propTypes = {
	/**
	 * Specify the type of the typography, choosing this will give you the tag type in html
	 * for example if you choose type 'h1', you will render <h1></h1>
	 */
	type: PropTypes.string,
	/**
	 * You can override the weight of the Typography type you choose, currently we support only two weights
	 * with OpenSans, 400 & 600
	 */
	weight: PropTypes.string,
	/**
	 * You can specify the font size of any typography type
	 */
	fontSize: PropTypes.string,
};

export default TypographyComponent;
