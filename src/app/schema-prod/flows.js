
export default {"test":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainNavigationTabs"},"events":[{"name":"onChangeActiveTab","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.setActiveNavigationTab"},"events":[{"name":"navigationTabsProps","targets":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainNavigationTabs"}}]}]}]}]}],"todo":{"init-notes-on-start":[{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"},"events":[{"name":"onApplicationStart","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.initializeToDoNotes"},"events":[{"name":"navigationTabsProps","targets":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainNavigationTabs"}}]},{"name":"todoNotesListProps","targets":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"todoList"}}]}]}]}]}]}};
