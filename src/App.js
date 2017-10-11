import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MMC_ComponentSlides from './presentations/mcc-component-driven-design';
import SCS_ComponentSlides from './presentations/scs-state-react-styling';
import DS_GS_ComponentSlides from './presentations/ds-getting-specific';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/scs-state-react-styling"
            component={SCS_ComponentSlides}
          />
          <Route path="/mcc-component-design" component={MMC_ComponentSlides} />
          <Route
            path="/ds-getting-specific"
            component={DS_GS_ComponentSlides}
          />
          <Route
            render={() => (
              <div>
                <h1>Talks List</h1>
                <ul>
                  <li>
                    <Link to="/scs-state-react-styling">
                      Scenic City Summit - State of React Styling
                    </Link>
                  </li>
                  <li>
                    <Link to="/mcc-component-design">
                      Music City Code - Component Based Styling
                    </Link>
                  </li>
                  <li>
                    <Link to="/ds-getting-specific">
                      DevSpaceConf - Getting Specific: Component Based Styling
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
