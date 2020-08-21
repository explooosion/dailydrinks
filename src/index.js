import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import App from './App';

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./scss/_index.scss');

const GlobalStyle = createGlobalStyle`

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${p => p.theme.globalFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
