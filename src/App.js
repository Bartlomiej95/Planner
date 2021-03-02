import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import HomePage from './views/HomePage';
import LogInPage from './views/LogInPage';
import { theme } from './theme/mainTheme';
import RegisterPage from './views/RegisterPage';
import LogoutPage from './views/LogoutPage';
import UserPage from './views/UserPage';
import { UserContextProvider } from "./context/UserContext";
import CreateProject from './views/CreateProject';
import TasksToProject from './views/TasksToProject';
import DetailsProject from './views/DetailsProject';


Axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <Router>
            <Switch>
            <Route exact path="/" render={() => <Redirect to="/homepage" />} />
              <Route exact path="/homepage" component={HomePage}/>
              <Route exact path="/homepage/login" component={LogInPage}/>
              <Route exact path="/homepage/register" component={RegisterPage}/>
              <Route exact path="/homepage/logout" component={LogoutPage}/>
              <Route exact path="/homepage/user" component={UserPage}/>
              <Route exact path="/homepage/project/create" component={CreateProject}/>
              <Route exact path="/homepage/project/tasks" component={TasksToProject}/>
              <Route exact path="/homepage/project/details" component={DetailsProject}/>
            </Switch>
          </Router>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
