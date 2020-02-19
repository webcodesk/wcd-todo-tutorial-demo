/**
 *
 */
export const setActiveNavigationTab = (tabType, { stateByDispatch, history }) => dispatch => {
  if (stateByDispatch && tabType) {
    const { navigationTabsProps } = stateByDispatch;
    dispatch({ navigationTabsProps: { ...navigationTabsProps, ...{ activeTabType: tabType } } });
  }
};
