import PropTypes from 'prop-types';

export const ToDoNotesListTypes = {
  /**
   *
   */
  emptyListMessage: PropTypes.string,
  /**
   *
   */
  notes: PropTypes.arrayOf(PropTypes.shape({
    noteText: PropTypes.string,
    isCompleted: PropTypes.bool,
  })),
  /**
   *
   */
  onToggleNoteCompleted: PropTypes.func,
  /**
   *
   */
  onDeleteNote: PropTypes.func,
};
