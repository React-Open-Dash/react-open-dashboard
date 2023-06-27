import PropTypes from 'prop-types';

/**
 * <p>**DOCS**</p>
 * The input text component, another core component across the app along with the other input components,
 * right now we only support outlined input-text component.
 * <p>**REQUIREMENTS**</p>
 * 1. This component should be created following the designs described in [Figma | Inputs](https://www.figma.com/file/lfO8GTUs6EUmD5cRCDFx0z/React-Open-Dash?type=design&node-id=37-2&mode=design&t=shqYiHFUJ33bNccF-4)
 * 2. This component should be developed using BEM for SCSS and use css modules.
 * 3. This component should be tested — jest and react testing library already installed, have a look in a tutorial.
 * 4. This component should have stories defined for storybook.
 * 5. This component should be typed using propTypes.
 * 6. This component should support any icon provided by font-awesome 4 — already integrated in the project.
 */
const TextInput = ({ value, icon, limit }) => {
	return <div>Text Input</div>;
};

TextInput.propTypes = {
	/**
	 * Optional icon to show in the input, this in this case an icon from font-awesome
	 * (font-awesome is already integrated in the project)
	 */
	icon: PropTypes.string,
	/**
	 * The value of the input
	 */
	value: PropTypes.string.isRequired,
	/**
	 * Optional prop that indicates the limit of characters of the input if this prop
	 * doesn't come, then no character restriction should be applied.
	 */
	limit: PropTypes.number,
};

export default TextInput;
