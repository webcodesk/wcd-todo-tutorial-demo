
export default {"todo":{"add-new-note-by-action-button":[{"type":"component","props":{"componentName":"usr.atom.ActionButton","componentInstance":"addNoteButton"},"events":[{"name":"onClick","targets":[{"type":"userFunction","props":{"functionName":"usr.atom.ActionButton.goToUrl"}}]}]}],"cancel-adding-a-note":[{"type":"component","props":{"componentName":"usr.todo.NewNoteForm","componentInstance":"addNoteForm"},"events":[{"name":"onCancel","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.cancelAddingNote"}}]}]}],"change-navigation-tab":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainNavigationTabs"},"events":[{"name":"onChangeActiveTab","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.setActiveNavigationTab"},"events":[{"name":"navigationTabsProps","targets":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainNavigationTabs"}}]}]}]}]}],"filter-note-list-by-navigation":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainNavigationTabs"},"events":[{"name":"onChangeActiveTab","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.filterByNavigation"},"events":[{"name":"todoNotesListProps","targets":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"todoList"}}]}]}]}]}],"init-notes-on-start":[{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"},"events":[{"name":"onApplicationStart","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.initializeNotes"},"events":[{"name":"navigationTabsProps","targets":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainNavigationTabs"}}]},{"name":"todoNotesListProps","targets":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"todoList"}}]}]}]}]}],"note-list-event-handling":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"todoList"},"events":[{"name":"onDeleteNote","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.deleteNote"},"events":[{"name":"todoNotesListProps","targets":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"todoList"}}]}]}]},{"name":"onToggleNoteCompleted","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.toggleNoteCompleted"},"events":[{"name":"todoNotesListProps","targets":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"todoList"}}]}]}]}]}],"save-new-note":[{"type":"component","props":{"componentName":"usr.todo.NewNoteForm","componentInstance":"addNoteForm"},"events":[{"name":"onSaveNote","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.validateNoteText"},"events":[{"name":"error","targets":[{"type":"component","props":{"componentName":"usr.todo.NewNoteForm","componentInstance":"addNoteForm"}}]},{"name":"success","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.saveNewNote"},"events":[{"name":"todoNotesListProps","targets":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"todoList"}}]}]}]}]}]}]}]}};
