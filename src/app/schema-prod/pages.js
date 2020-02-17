export default {
  'add-new-note': {
    'type': 'usr.layout.PageFrameWithActionButton', 'instance': 'addNewNotePageFrame', 'props': {
      'actionButtonContent': null,
      'applicationBarContent': null,
      'applicationBarPalette': { 'backgroundColor': {}, 'color': {} },
      'mainAreaChildren': [{
        'type': 'usr.layout.Container',
        'instance': 'addNewNotePageContainer',
        'props': {
          'content': {
            'type': 'usr.layout.Grid',
            'instance': 'addFormGrid',
            'props': {
              'cells': [{
                'type': 'usr.atom.Typography',
                'instance': 'addFormTitle',
                'props': {
                  'align': 'center',
                  'color': 'initial',
                  'display': 'initial',
                  'gutterBottom': false,
                  'noWrap': false,
                  'paragraph': false,
                  'text': 'New ToDo',
                  'variant': 'h5'
                }
              }, {
                'type': 'usr.layout.Paper',
                'instance': 'addFormPaper',
                'props': {
                  'children': [{
                    'type': 'usr.todo.NewNoteForm',
                    'instance': 'addNoteForm',
                    'props': {
                      'helperText': 'Enter a note text',
                      'hrefOnCancel': '/',
                      'hrefOnSaveNote': '/',
                      'isError': false,
                      'label': 'Add Note',
                      'rowsNumber': 6,
                      'spacing': '1'
                    }
                  }],
                  'elevation': '2',
                  'paddingSpacing': { 'padding': '0', 'paddingBottom': '2', 'paddingLeft': '2', 'paddingRight': '2' },
                  'palette': {
                    'backgroundColor': { 'colorHue': 'yellow', 'colorShade': '100' },
                    'color': { 'colorHue': 'white' }
                  },
                  'square': false,
                  'variant': 'elevation'
                }
              }], 'grid': { 'direction': 'column', 'spacing': '3' }
            }
          }, 'disableMaxWidth': false, 'fixed': false, 'maxWidth': 'xs'
        }
      }],
      'mainAreaPadding': { 'paddingTop': '10%' },
      'mainAreaPalette': { 'backgroundColor': { 'colorHue': 'white' }, 'color': {} }
    }
  }, 'main': {
    'type': 'usr.layout.PageFrameWithActionButton', 'instance': 'mainPageFrame', 'props': {
      'actionButtonContent': {
        'type': 'usr.atom.ActionButton',
        'instance': 'addNoteButton',
        'props': {
          'color': 'primary',
          'href': '/add-new-note',
          'icon': {
            'type': 'usr.atom.SvgIcon',
            'instance': 'addIcon',
            'props': {
              'color': 'inherit',
              'fontSize': 'default',
              'paths': [{
                'd': 'M0 0h24v24H0V0z',
                'fill': 'none'
              }, { 'd': 'M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z' }],
              'viewBox': '0 0 24 24'
            }
          }
        }
      },
      'applicationBarContent': {
        'type': 'usr.todo.NavigationTabs',
        'instance': 'mainNavigationTabs',
        'props': {
          'activeTabType': 'all',
          'tabs': [{ 'tabLabel': 'All', 'tabType': 'all' }, {
            'tabLabel': 'Active',
            'tabType': 'active'
          }, { 'tabLabel': 'Completed', 'tabType': 'completed' }]
        }
      },
      'applicationBarPalette': { 'backgroundColor': { 'colorHue': 'white', 'colorShade': '100' }, 'color': {} },
      'htmlPageTitle': 'ToDo | Home',
      'mainAreaChildren': [{
        'type': 'usr.layout.Container',
        'instance': 'mainPageContainer',
        'props': {
          'content': {
            'type': 'usr.layout.Grid',
            'instance': 'mainPageGrid',
            'props': {
              'cells': [{
                'type': 'usr.atom.Typography',
                'instance': 'mainPageLabel',
                'props': {
                  'align': 'center',
                  'color': 'initial',
                  'display': 'initial',
                  'gutterBottom': false,
                  'noWrap': false,
                  'paragraph': false,
                  'text': 'ToDos',
                  'variant': 'h5'
                }
              }, {
                'type': 'usr.layout.Paper',
                'instance': 'todoListPaper',
                'props': {
                  'children': [{
                    'type': 'usr.todo.ToDoNotesList',
                    'instance': 'todoList',
                    'props': { 'emptyListMessage': 'There are no notes', 'notes': [] }
                  }],
                  'elevation': '2',
                  'paddingSpacing': { 'padding': '0', 'paddingBottom': '0' },
                  'palette': {
                    'backgroundColor': { 'colorHue': 'blue', 'colorShade': '500' },
                    'color': { 'colorHue': 'white' }
                  },
                  'square': false,
                  'variant': 'elevation'
                }
              }], 'grid': { 'direction': 'column', 'spacing': '4' }
            }
          }, 'disableMaxWidth': false, 'fixed': false, 'maxWidth': 'sm'
        }
      }],
      'mainAreaPadding': { 'paddingBottom': '150px', 'paddingTop': '90px' },
      'mainAreaPalette': { 'backgroundColor': { 'colorHue': 'white', 'colorShade': '100' }, 'color': {} }
    }
  }
};
