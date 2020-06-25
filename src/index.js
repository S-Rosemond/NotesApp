import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
