import PropTypes from 'prop-types';

export const NavigationTabsTypes = {
  /**
   *
   */
  activeTabType: PropTypes.oneOf(['all', 'active', 'completed']),
  /**
   *
   */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    tabType: PropTypes.oneOf(['all', 'active', 'completed']),
    tabLabel: PropTypes.string,
  })),
  /**
   * Triggered when the user activates another tab
   */
  onChangeActiveTab: PropTypes.func,
};
