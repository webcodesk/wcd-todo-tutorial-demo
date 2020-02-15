import PropTypes from 'prop-types';

export const PaperTypes = {
  /**
   * Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
   */
  elevation: PropTypes.oneOf([
    '0', '1', '2', '3',
    '4', '5', '6', '7',
    '8', '9', '10', '11',
    '12', '13', '14', '15',
    '16', '17', '18', '19',
    '20', '21', '22', '23',
    '24'
  ]),
  /**
   * If true, rounded corners are disabled.
   */
  square: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['elevation', 'outlined']),
  /**
   * Children components
   */
  children: PropTypes.arrayOf(PropTypes.element),
};
