import React, {
  FunctionComponent,
  createContext
} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {
  createGlobalStyle,
  ThemeProvider
} from 'styled-components';
import WebFont from 'webfontloader';
import DevTools from 'mobx-react-devtools';

import { Routes } from './types';
import theme from './theme';
import { RootStore } from '../../store/root_store';
import Navigation from './navigation';
import Login_Signup from '../authentication/login_signup';

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

// create new application state
const store = new RootStore();
export const Context = createContext(store);

interface Props {}

const App: FunctionComponent<Props> = ():JSX.Element => {
  return(
    <Context.Provider value={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <DevTools />
          <GlobalStyle />
          <Router>
            <Navigation />
            <Route
              path={[Routes.login, Routes.signup]}
              component={Login_Signup}
            />
          </Router>
        </React.Fragment>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
