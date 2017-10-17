import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import {
  MMC_ComponentSlides,
  SCS_ComponentSlides,
  DS_GS_ComponentSlides,
} from './presentations/state-of-styling';
import DS_EM_ComponentSlides from './presentations/ds-expect-more';

const links = {
  'mcc-component-design': {
    component: MMC_ComponentSlides,
    title: 'Music City Code - Component Based Styling',
  },
  'scs-state-react-styling': {
    component: SCS_ComponentSlides,
    title: 'Scenic City Summit - State of React Styling',
    redirects: ['state-react-styling'],
  },
  'ds-expect-more': {
    component: DS_EM_ComponentSlides,
    title:
      'DevSpaceConf - Expect More: Getting Started with JavaScript Testing',
  },
  'ds-getting-specific': {
    component: DS_GS_ComponentSlides,
    title: 'DevSpaceConf - Getting Specific: Component Based Styling',
  },
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {Object.keys(links).map(key => {
            const route = links[key];
            return [
              <Route key={key} path={`/${key}`} component={route.component} />,
              ...(route.redirects || []).map(path => (
                <Route
                  path={`/${path}`}
                  render={() => <Redirect to={`/${key}`} />}
                />
              )),
            ];
          })}
          <Route
            render={props =>
              console.log(props || 'no props') || (
                <div>
                  <h1>Talks List</h1>
                  <ul>
                    {Object.keys(links).map(key => (
                      <li>
                        <Link key={key} to={`/${key}`}>
                          {links[key].title}
                        </Link>
                      </li>
                    ))}
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
