import PropTypes from 'prop-types';
import { ColorTypes } from './props/color.props';
import { PaddingTypes } from './props/padding.props';

export const PageFrameWithActionButtonTypes = {
  /**
   * Sets the custom color of the application bar
   */
  applicationBarPalette: PropTypes.shape({
    color: PropTypes.shape(ColorTypes),
    backgroundColor: PropTypes.shape(ColorTypes),
  }),
  // Shadow depth of the application bar. It accepts values between 0 and 24 inclusive.
  applicationBarElevation: PropTypes.oneOf([
    '0', '1', '2', '3',
    '4', '5', '6', '7',
    '8', '9', '10', '11',
    '12', '13', '14', '15',
    '16', '17', '18', '19',
    '20', '21', '22', '23',
    '24'
  ]),
  // Sets the color of the component
  mainAreaPalette: PropTypes.shape({
    color: PropTypes.shape(ColorTypes),
    backgroundColor: PropTypes.shape(ColorTypes),
  }),
  /**
   * A group of the padding properties of the main area.
   */
  mainAreaPadding: PropTypes.shape(PaddingTypes),
  /**
   * Children in the main area
   */
  mainAreaChildren: PropTypes.arrayOf(PropTypes.element),
  /**
   * The page title shown in the browser window
   */
  htmlPageTitle: PropTypes.string,
  /**
   * Set action button here
   */
  actionButtonContent: PropTypes.element,
  /**
   * Node
   */
  applicationBarContent: PropTypes.node,
  /**
   * Hidden components
   */
  hiddenComponents: PropTypes.arrayOf(PropTypes.node),
};