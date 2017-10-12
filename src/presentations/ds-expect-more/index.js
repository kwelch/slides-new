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
} from 'spectacle';

import AppearList from '../../components/AppearList';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  about: require('./assets/about-me.png'),
  twitterLogo: require('./assets/twitter-logo.svg'),
  githubLogo: require('./assets/GitHub-Mark-120px-plus.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    codePaneBg: '#2d2d2d',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide transition={['zoom']}>
          <Heading>Expect More</Heading>
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
        <Slide transition={['fade']} bgColor="primary">
          <Notes>
            <ul>
              <li />
            </ul>
          </Notes>
          <Heading fit textColor="tertiary">
            What is this talk?
          </Heading>
          <AppearList
            items={[
              'Knowledge to get started',
              'Adding testing to your flow',
              'Excited about testing',
            ]}
          />
        </Slide>
        <Slide>
          <Heading>Shameless Plug</Heading>
          <Appear>
            <div>
              <Text>Exercises</Text>
              <Text>
                <Link
                  textColor="tertiary"
                  href="https://github.com/NashReact/jest-exercises"
                >
                  github.com/NashReact/jest-exercises
                </Link>
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading>Setup</Heading>
          <AppearList
            items={['npm install --save-dev jest-cli', '"test": "jest"']}
          />
        </Slide>
        <Slide>
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

        <Slide>
          <Heading>Time</Heading>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Appear>
                <div>
                  <Text>Coverage</Text>
                </div>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <div>
                  <Text>Importance</Text>
                </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading>Exciting Stuff</Heading>
        </Slide>

        <Slide>
          <Heading>Only one area of Testing</Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank You!
          </Heading>
          <Text margin="5rem 0 0" textColor="tertiary" size={3} bold>
            Kyle Welch
          </Text>
          <Link
            href="http://bit.ly/ds-expect-more"
            margin=".5rem 0 0"
            textColor="tertiary"
            size={0.75}
            italic
          >
            http://bit.ly/ds-expect-more
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
      </Deck>
    );
  }
}
