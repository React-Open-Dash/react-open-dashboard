import React from 'react';
import PropTypes from 'prop-types';

/**
 * <p>**DOCS**</p>
 * The ButtonComponent is used across the page when a button is needed, this component must have different configurations,
 * since the idea is to only use this button, this button must follow the designs expressed in the page [Figma | Buttons](https://www.figma.com/file/lfO8GTUs6EUmD5cRCDFx0z/Untitled?type=design&node-id=10-54&t=tWEDyjDkH7T1UQk0-4)
 * <p>**REQUIREMENTS**</p>
 * 1. This component should be develop following the designs in the next URL [Figma | Buttons](https://www.figma.com/file/lfO8GTUs6EUmD5cRCDFx0z/Untitled?type=design&node-id=10-54&t=tWEDyjDkH7T1UQk0-4)
 * 2. This component should be testing — jest and react testing library already installed, check a tutorial.
 * 3. This component should follow BEM architecture for SCSS.
 * 4. This component should use css modules.
 * 5. This component should support any type you see in the designs.
 * 5. This component should have stories defined for storybook.
 * 6. This component should be typed using propTypes.
 * 7. This component should support any icon provided by font-awersome-4 — already installed in the project.
 * 
 */
const ButtonComponent = ({ type = 'filled', text }) => {
	return <button>Button</button>;
};

ButtonComponent.propTypes = {
	/**
	 * outline | filled | ghost
	 */
	type: (PropTypes.string = 'outlined'),
	icon: PropTypes.string,
	/**
	 * The text that will be displayed inside the button
	 */
	text: PropTypes.string.isRequired,
};

export default ButtonComponent;
