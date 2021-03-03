import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import AuthRoute from './routes/AuthRoute';
import PrivateRoute from './routes/PrivateRoute';
import Trainee from './pages/Trainee/Trainee';
import TextFieldDemo from './pages/TextFieldDemo/TextFieldDemo';
import InputDemo from './pages/InputDemo/InputDemo';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';
import LoginComponet from './pages/Login/Login';
import NoMatchComponent from './pages/NoMatch/NoMatch';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/trainee" />
            </Route>
            <AuthRoute path="/login" component={LoginComponet} />
            <PrivateRoute path="/trainee" component={Trainee} />
            <PrivateRoute path="/test-field-demo" component={TextFieldDemo} />
            <PrivateRoute path="/input-demo" component={InputDemo} />
            <PrivateRoute path="/childern-demo" component={ChildrenDemo} />
            <PrivateRoute path="*" exact component={NoMatchComponent} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
