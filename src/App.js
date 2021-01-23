import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import HomePage from './views/HomePage';
import LogInPage from './views/LogInPage';
import { theme } from './theme/mainTheme';
import RegisterPage from './views/RegisterPage';
import LogoutPage from './views/LogoutPage';
import UserPage from './views/UserPage';


function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/logout" component={LogoutPage}/>
            <Route exact path="/homepage/user" component={UserPage}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
