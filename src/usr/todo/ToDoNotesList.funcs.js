export const setNotes = (notes, { stateByDispatch, history }) => async (dispatch) => {
  if (stateByDispatch && notes) {
    const { todoNotesListProps } = stateByDispatch;
    dispatch({
      todoNotesListProps: { ...todoNotesListProps, notes },
    });
  }
};
