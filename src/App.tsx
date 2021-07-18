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
import ThemeContextProvider from "./context/theme";
import CreateProject from './views/CreateProject';
import TasksToProject from './views/TasksToProject';
import DetailsProject from './views/DetailsProject';
import MessagesPage from './views/MessagesPage';
import CreateMessagePage from './views/CreateMessagePage';
import DetailsMessage from './views/DetailsMessage';

Axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
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
                <Route exact path="/homepage/project/:name" component={DetailsProject}/>
                <Route exact path="/homepage/project/edit/:name" component={CreateProject}/>
                <Route exact path="/homepage/message" component={MessagesPage}/>
                <Route exact path="/homepage/message/create" component={CreateMessagePage}/>
                <Route exact path="/homepage/message/:title" component={DetailsMessage}/>
              </Switch>
            </Router>
          </UserContextProvider>
        </ThemeContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
