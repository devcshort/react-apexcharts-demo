import { createMuiTheme } from '@material-ui/core';

const Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1890ff',
    },
    secondary: {
      main: '#f5222d',
    },
    background: {
      default: '#1C2025',
      paper: '#282C34',
    },
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      '"Helvetica Neue"',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 600,
  },
  shape: {
    borderRadius: 0,
  },
});

export default Theme;
