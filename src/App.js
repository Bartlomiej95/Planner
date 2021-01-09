import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import HomePage from './views/HomePage';
import { theme } from './theme/mainTheme';


function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
