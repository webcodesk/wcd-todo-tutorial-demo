/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "SettingsProps" }]*/
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "defaultSettings" }]*/
import PropTypes from 'prop-types';
import { ThemeColorTypes } from './settings.props';

const SettingsProps = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      // Primary
      primary: PropTypes.shape({
        main: PropTypes.shape(ThemeColorTypes),
        contrastText: PropTypes.string,
      }),
      secondary: PropTypes.shape({
        main: PropTypes.shape(ThemeColorTypes),
        contrastText: PropTypes.string,
      }),
      error: PropTypes.shape({
        main: PropTypes.shape(ThemeColorTypes),
        contrastText: PropTypes.string,
      }),
    }),
  })
};

export const defaultSettings = {
  theme: {
    status: {
      fontFamily: ['"Roboto"', 'sans-serif'],
    },
    palette: {
      type: 'light',
      primary: {
        main: {
          colorHue: 'indigo',
          colorShade: '500'
        },
        contrastText: '#fff',
      },
      secondary: {
        main: {
          colorHue: 'pink',
          colorShade: 'A400'
        },
        contrastText: '#fff',
      },
      error: {
        main: {
          colorHue: 'red',
          colorShade: '500'
        },
        contrastText: '#fff',
      }
    },
  }
};
