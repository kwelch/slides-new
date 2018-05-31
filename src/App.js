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
  CS_ComponentSlides,
} from './presentations/state-of-styling';
import DS_EM_ComponentSlides from './presentations/ds-expect-more';
import { RC_ComponentSlides } from './presentations/git-more-done';

const groupBy = list => key =>
  list.reduce((acc, curr) => {
    let yearKey = curr[key];
    let currYearValue = acc[yearKey] || [];

    return {
      ...acc,
      [yearKey]: [...currYearValue, curr],
    };
  }, {});

const talks = [
  {
    key: 'mcc-component-design',
    component: MMC_ComponentSlides,
    conference: 'Music City Code',
    year: 2017,
    title: 'Component Based Styling',
  },
  {
    key: 'scs-state-react-styling',
    component: SCS_ComponentSlides,
    conference: 'Scenic City Summit',
    year: 2017,
    title: 'State of React Styling',
    redirects: ['state-react-styling'],
  },
  {
    key: 'ds-expect-more',
    component: DS_EM_ComponentSlides,
    conference: 'DevSpace Conf',
    year: 2017,
    title: 'Expect More: Getting Started with JavaScript Testing',
  },
  {
    key: 'ds-getting-specific',
    component: DS_GS_ComponentSlides,
    conference: 'DevSpace Conf',
    year: 2017,
    title: 'Getting Specific: Component Based Styling',
  },
  {
    key: 'cs-breaking-css-global-namespace',
    component: CS_ComponentSlides,
    conference: 'CodeStock',
    year: 2018,
    title: 'Breaking CSS Global Namespace: Intro to Modular Styling',
  },
  {
    key: 'rc-git-it-done',
    component: RC_ComponentSlides,
    conference: 'Revolution Conf',
    year: 2018,
    title: 'Git it Done: Effective Feature Development',
  },
];

class App extends Component {
  render() {
    const talksByYear = groupBy(talks)('year');

    return (
      <Router>
        <Switch>
          {talks.map(({ key, component, redirects }) => [
            <Route key={key} path={`/${key}`} component={component} />,
            ...(redirects || []).map(path => (
              <Route
                path={`/${path}`}
                render={() => <Redirect to={`/${key}`} />}
              />
            )),
          ])}
          <Route
            render={props => (
              <div>
                <h1>Talks List</h1>
                {Object.keys(talksByYear)
                  .sort((yearA, yearB) => yearB - yearA)
                  .map(year => (
                    <div key={year}>
                      <h2>{year}</h2>

                      <ul>
                        {talksByYear[year].map(talk => (
                          <li key={talk.key}>
                            <Link to={`/${talk.key}`}>
                              {talk.conference} - {talk.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
