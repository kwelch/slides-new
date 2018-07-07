/* eslint-disable react/prop-types */
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Image,
  Slide,
  Heading,
  Fill,
  Layout,
  Link,
  Text,
  Notes,
  Appear,
  List,
  ListItem,
} from 'spectacle';

import AppearList from '../../components/AppearList';
import TitleHeader from '../../components/TitleHeader';
import TwitterFooter from '../../components/TwitterFooter';
import DeckWrapper from '../../components/DeckWrapper';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  about: require('../../assets/about-me.png'),
  twitterLogo: require('../../assets/twitter-logo.svg'),
  githubLogo: require('../../assets/GitHub-Mark-120px-plus.png'),
  sponsors: require('../../assets/ds_sponsors.png'),
  intro: require('./assets/ds_cover-slide.png'),
  jest: require('./assets/jest-logo.png'),
  raincoat: require('./assets/full-coverage.png'),
  umbrella: require('./assets/top-coverage.png'),
  plug: require('./assets/plug.png'),
  lifeUnitTests: require('./assets/life-unit-tests.png'),
  time: require('./assets/time.jpeg'),
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#99424f', //'#03A9FC',
    quartenary: '#CECECE',
    codePaneBg: '#2d2d2d',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  static title = 'Expect More: Getting Started with JavaScript Testing';

  render() {
    return (
      <DeckWrapper
        topContent={TitleHeader({ theme, images, title: Presentation.title })}
        bottomContent={TwitterFooter({ images, theme })}
      >
        <Deck
          transition={['zoom', 'slide']}
          transitionDuration={500}
          theme={theme}
          progress="pacman"
        >
          <Slide
            transition={['zoom']}
            style={{
              backgroundColor: '#f9f9f9',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
              backgroundImage: `url(${images.intro})`,
            }}
          />
          <Slide
            style={{
              backgroundColor: '#f9f9f9',
            }}
          >
            <Image src={images.jest} height={150} />
            <Heading style={{ lineHeight: '10rem' }}>
              Delightful JavaScript Testing
            </Heading>
            <Notes>
              <ul>
                <li>All in one</li>
                <li>Spy</li>
                <li>Coverage</li>
                <li>assertions</li>
                <li>watch mode</li>
              </ul>
            </Notes>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading textColor="primary">Setup</Heading>
            <AppearList
              textColor="primary"
              items={['npm install --save-dev jest-cli', '"test": "jest"']}
            />
          </Slide>

          <Slide bgColor="codePaneBg">
            <Image src={images.time} />
          </Slide>

          <Slide
            style={{
              backgroundColor: '#f9f9f9',
            }}
          >
            <Layout>
              <Fill>
                <Appear>
                  <div>
                    <Image src={images.raincoat} />
                  </div>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <div>
                    <Image src={images.umbrella} />
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading>Resources</Heading>
            <List>
              <ListItem>
                <Link href="https://facebook.github.io/jest/docs/en/getting-started.html">
                  Jest Docs
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/NashReact/jest-exercises">
                  Jest Exercises
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.youtube.com/watch?v=ZJ43STkmK-4">
                  Jest as a Platform
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/airbnb/enzyme">
                  Enzyme For React Component Testing
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/FormidableLabs/enzyme-matchers">
                  Enzyme Matchers for better assertions
                </Link>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Thank You!
            </Heading>
            <Text margin="5rem 0 0" textColor="tertiary" size={3} bold>
              Kyle Welch
            </Text>
            <Link
              href="https://slides.krwelch.com/mcc-expect-more"
              margin=".5rem 0 0"
              textColor="tertiary"
              size={0.75}
              italic
            >
              https://slides.krwelch.com/mcc-expect-more
            </Link>
            <Layout style={{ marginTop: 100, justifyContent: 'space-between' }}>
              <Fill>
                <Text textColor="tertiary" style={{ textAlign: 'left' }}>
                  <Image
                    src={images.twitterLogo}
                    style={{ height: 25, margin: '0 10px 0' }}
                  />
                  @kylewelch
                </Text>
              </Fill>
              <Fill>
                <Text style={{ textAlign: 'right' }}>
                  <Image
                    src={images.githubLogo}
                    style={{ height: 30, margin: '0 10px 0' }}
                  />
                  /kwelch
                </Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide
            transition={['slide']}
            style={{
              backgroundColor: '#f9f9f9',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
              backgroundImage: `url(${images.about})`,
            }}
          />
        </Deck>
      </DeckWrapper>
    );
  }
}
