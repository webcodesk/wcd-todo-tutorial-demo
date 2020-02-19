export const validateNoteText = (noteText, { stateByDispatch, history }) => dispatch => {
  if (noteText) {
    dispatch({
      noteText,
    });
  } else {
    dispatch({ failure: true });
  }
};

export const setError = (options, {stateByDispatch}) => dispatch => {
  if (stateByDispatch) {
    const { newNoteFormProps } = stateByDispatch;
    dispatch({ newNoteFormProps: {...newNoteFormProps, ...{isError: true}} });
  }
};
