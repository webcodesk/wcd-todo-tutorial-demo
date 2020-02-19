export const goToPage = (options, {stateByDispatch, history}) => dispatch => {
  if (stateByDispatch && history) {
    const { pageRouteAnchorProps } = stateByDispatch;
    if (pageRouteAnchorProps && pageRouteAnchorProps.pageRoutePath) {
      history.push(pageRouteAnchorProps.pageRoutePath);
    }
    dispatch({
      pageRouteAnchorProps
    });
  }
};