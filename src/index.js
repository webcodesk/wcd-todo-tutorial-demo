import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Application from '@webcodesk/react-app-framework';
import Application, {getDemoFiles} from './framework-demo';
import './index.css';
import appSettings from './app/settings';
import findColor from './utils/colorMap';

const schema = require('./app/schema').default;
const userComponents = require('./app/indices/userComponents').default;
const userFunctions = require('./app/indices/userFunctions').default;

if (process.env.NODE_ENV !== 'production') {
  const packageJson = require('../package.json');
  const settings = appSettings;
  const muiTheme = {};
  if (settings && settings.muiTheme) {
    const { breakpoints, palette, zIndex } = settings.muiTheme;
    muiTheme.breakpoints = breakpoints;
    muiTheme.zIndex = zIndex;
    if (palette) {
      const { type, primary, secondary, error } = palette;
      muiTheme.palette = {
        type,
        primary: {
          light: findColor(primary.light.colorHue, primary.light.colorShade),
          main: findColor(primary.main.colorHue, primary.main.colorShade),
          dark: findColor(primary.dark.colorHue, primary.dark.colorShade),
          contrastText: primary.contrastText,
        },
        secondary: {
          light: findColor(secondary.light.colorHue, secondary.light.colorShade),
          main: findColor(secondary.main.colorHue, secondary.main.colorShade),
          dark: findColor(secondary.dark.colorHue, secondary.dark.colorShade),
          contrastText: secondary.contrastText,
        },
        error: {
          light: findColor(error.light.colorHue, error.light.colorShade),
          main: findColor(error.main.colorHue, error.main.colorShade),
          dark: findColor(error.dark.colorHue, error.dark.colorShade),
          contrastText: error.contrastText,
        }
      };
    }
  }

  const theme = createMuiTheme(muiTheme);

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
    getDemoFiles({schema, settings: appSettings}).then(({schema, settings}) => {
      const muiTheme = {};
      if (settings && settings.muiTheme) {
        const { breakpoints, palette, zIndex } = settings.muiTheme;
        muiTheme.breakpoints = breakpoints;
        muiTheme.zIndex = zIndex;
        if (palette) {
          const { type, primary, secondary, error } = palette;
          muiTheme.palette = {
            type,
            primary: {
              light: findColor(primary.light.colorHue, primary.light.colorShade),
              main: findColor(primary.main.colorHue, primary.main.colorShade),
              dark: findColor(primary.dark.colorHue, primary.dark.colorShade),
              contrastText: primary.contrastText,
            },
            secondary: {
              light: findColor(secondary.light.colorHue, secondary.light.colorShade),
              main: findColor(secondary.main.colorHue, secondary.main.colorShade),
              dark: findColor(secondary.dark.colorHue, secondary.dark.colorShade),
              contrastText: secondary.contrastText,
            },
            error: {
              light: findColor(error.light.colorHue, error.light.colorShade),
              main: findColor(error.main.colorHue, error.main.colorShade),
              dark: findColor(error.dark.colorHue, error.dark.colorShade),
              contrastText: error.contrastText,
            }
          };
        }
      }

      const theme = createMuiTheme(muiTheme);

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

