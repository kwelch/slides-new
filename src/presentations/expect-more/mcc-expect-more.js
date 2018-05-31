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
  about: require('../../assets/about-me.png'),
  twitterLogo: require('../../assets/twitter-logo.svg'),
  githubLogo: require('../../assets/GitHub-Mark-120px-plus.png'),
  sponsors: require('../../assets/mcc_2018_sponsors.webp'),
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
    tertiary: '#99424f', 
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
        <Slide
          transition={['slide']}
          style={{
            backgroundColor: 'white',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            backgroundImage: `url(${images.sponsors})`,
          }}
        />
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
    );
  }
}
