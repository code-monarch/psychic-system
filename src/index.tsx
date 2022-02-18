import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { MantineProvider } from '@mantine/core';
import { App } from './App';
import { AppProviders } from './context';
import reportWebVitals from './reportWebVitals';
import { lightTheme, mantineThemeOverrides } from './themes';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <MantineProvider theme={mantineThemeOverrides}>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </MantineProvider>
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
