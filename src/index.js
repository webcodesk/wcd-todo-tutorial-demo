import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Application, {getDemoFiles} from '@webcodesk/react-app-framework-demo';
import './index.css';
import globalSettings from './app/settings';
import findColor from './utils/colorMap';

const schema = require('./app/schema').default;
const userComponents = require('./app/indices/userComponents').default;
const userFunctions = require('./app/indices/userFunctions').default;

function initMuiThemeSettings(appSettings) {
  const muiTheme = {};
  if (appSettings && appSettings.theme) {
    const { palette } = appSettings.theme;
    if (palette) {
      const { type, primary, secondary, error } = palette;
      muiTheme.palette = {
        type,
        primary: {
          main: findColor(primary.main.colorHue, primary.main.colorShade),
          contrastText: primary.contrastText,
        },
        secondary: {
          main: findColor(secondary.main.colorHue, secondary.main.colorShade),
          contrastText: secondary.contrastText,
        },
        error: {
          main: findColor(error.main.colorHue, error.main.colorShade),
          contrastText: error.contrastText,
        }
      };
    }
  }
  return muiTheme;
}

if (process.env.NODE_ENV !== 'production') {
  const packageJson = require('../package.json');
  const theme = createMuiTheme(initMuiThemeSettings(globalSettings));
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Application
        name={packageJson.name}
        version={packageJson.version}
        schema={schema}
        userComponents={userComponents}
        userFunctions={userFunctions}
      />
    </ThemeProvider>,
    document.getElementById('root')
  );

} else {

  function render() {
    getDemoFiles({schema, settings: globalSettings}).then(({schema, settings}) => {
      const theme = createMuiTheme(initMuiThemeSettings(settings));
      ReactDOM.render(
        <ThemeProvider theme={theme}>
          <Application
            schema={schema}
            userComponents={userComponents}
            userFunctions={userFunctions}
          />
        </ThemeProvider>,
        document.getElementById('root')
      );
    });
  }

  render();
}

