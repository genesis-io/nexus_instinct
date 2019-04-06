import React, {FunctionComponent} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {
  createGlobalStyle,
  ThemeProvider
} from "styled-components";
import WebFont from 'webfontloader';

import Login_Signup from '../authentication/login_signup';
import { Routes } from './types';
import theme from './theme';

WebFont.load({
  google: {
    families: ['Noto Sans JP']
  }
});

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans JP';
  }
  
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

interface Props {}

const App: FunctionComponent<Props> = ():JSX.Element => {
  return(
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <Route path={[Routes.login, Routes.signup]} component={Login_Signup} />
        </Router>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
