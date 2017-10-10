import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MMC_ComponentSlides from './presentations/mcc-component-driven-design';
import SCS_ComponentSlides from './presentations/scs-state-react-styling';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/mcc-component-design" />}
          />
          <Route
            path="/scs-state-react-styling"
            component={SCS_ComponentSlides}
          />
          <Route path="/mcc-component-design" component={MMC_ComponentSlides} />
          <Route render={() => <h2>Presentation Not Found</h2>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
