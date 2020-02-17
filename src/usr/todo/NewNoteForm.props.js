import PropTypes from 'prop-types';

export const NewNoteFormTypes = {
  /**
   * Defines the space between the cells.
   */
  spacing: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
  /**
   *
   */
  label: PropTypes.string,
  /**
   *
   */
  isError: PropTypes.bool,
  /**
   *
   */
  helperText: PropTypes.string,
  /**
   * The URL for navigating when the user saves a note
   */
  hrefOnSaveNote: PropTypes.string,
  /**
   * Rows number
   */
  rowsNumber: PropTypes.number,
  /**
   * The URL for navigating when the user cancels
   */
  hrefOnCancel: PropTypes.string,
  /**
   *
   */
  onSaveNote: PropTypes.func,
  /**
   *
   */
  onCancel: PropTypes.func,
};
