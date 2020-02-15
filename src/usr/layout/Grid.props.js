import PropTypes from 'prop-types';

export const GridContainerTypes = {
  // Defines the direction of the cells in the grid
  direction: PropTypes.oneOf([
    'row', 'column'
  ]),
  /**
   * Defines the space between the cells.
   */
  spacing: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
};

export const GridTypes = {
  // Common container properties, it's applied only to the container component.
  grid: PropTypes.shape(GridContainerTypes),
  /**
   * Contents of the cells
   */
  cells: PropTypes.arrayOf(PropTypes.element),
};