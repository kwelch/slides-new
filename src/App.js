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
import {
  DS_EM_ComponentSlides,
  MCC_EM_ComponentSlides,
  KCDC_EM_ComponentSlides,
  SCS_EM_ComponentSlides,
} from './presentations/expect-more';
import {
  RC_ComponentSlides,
  KCDC_ComponentSlides as KCDC_GMD_ComponentSlides,
} from './presentations/git-more-done';

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
    conference: 'Music City Code',
    year: 2017,
    component: MMC_ComponentSlides,
    title: 'Component Based Styling',
  },
  {
    key: 'scs-state-react-styling',
    conference: 'Scenic City Summit',
    year: 2017,
    component: SCS_ComponentSlides,
    title: 'State of React Styling',
    redirects: ['state-react-styling'],
  },
  {
    key: 'ds-expect-more',
    conference: 'DevSpace Conf',
    year: 2017,
    component: DS_EM_ComponentSlides,
    title: 'Expect More: Getting Started with JavaScript Testing',
  },
  {
    key: 'ds-getting-specific',
    conference: 'DevSpace Conf',
    year: 2017,
    component: DS_GS_ComponentSlides,
    title: 'Getting Specific: Component Based Styling',
  },
  {
    key: 'cs-breaking-css-global-namespace',
    conference: 'CodeStock',
    year: 2018,
    component: CS_ComponentSlides,
    title: 'Breaking CSS Global Namespace: Intro to Modular Styling',
  },
  {
    key: 'rc-git-it-done',
    conference: 'Revolution Conf',
    year: 2018,
    component: RC_ComponentSlides,
    title: 'Git it Done: Effective Feature Development',
  },
  {
    key: 'mcc-expect-more',
    conference: 'Music City Code',
    year: 2018,
    component: MCC_EM_ComponentSlides,
    title: 'Expect More: Getting Started with JavaScript Testing',
  },
  {
    key: 'kcdc-git-it-done',
    conference: 'Kansas City Developer Conference',
    year: 2018,
    component: KCDC_GMD_ComponentSlides,
    title: KCDC_GMD_ComponentSlides.title,
  },
  {
    key: 'kcdc-expect-more',
    conference: 'Kansas City Developer Conference',
    year: 2018,
    component: KCDC_EM_ComponentSlides,
    title: KCDC_EM_ComponentSlides.title,
  },
  {
    key: 'scs-expect-more',
    conference: 'Scenic City Summit',
    year: 2018,
    component: SCS_EM_ComponentSlides,
    title: SCS_EM_ComponentSlides.title,
  },
  {
    key: 'scs-web-terrible',
    conference: 'Scenic City Summit',
    year: 2018,
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
