import { createMuiTheme } from '@material-ui/core/styles';

const main = {
  palette: {
    primary: {
      main: '#008080',
    },
    secondary: {
      main: '#279f9f',
    },
  },
  typography: {
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
};

const mainTheme = createMuiTheme(main);

export default mainTheme;
