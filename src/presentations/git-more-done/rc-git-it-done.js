/* eslint-disable react/prop-types */
import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  Link,
  Layout, 
  Fill, 
  Image,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  about: require('../../assets/about-me.png'),
  intro: require('./assets/cover-image.png'),
};

preloader(images);
//#979797", "#008fb5", "#f1c109
const theme = createTheme(
  {
    primary: 'white',
    secondary: '#008fb5',
    tertiary: '#f1c109',
    quartenary: '#979797',
    codePaneBg: '#2d2d2d',
    drawingBg: '#f9f9f9',
  },
  {
    primary: 'Source+Code+Pro',
    secondary: 'Montserrat',
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
            backgroundColor: '#1e1e1e',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage: `url(${images.intro})`,
          }}
        />



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
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank You!
          </Heading>
          <Text margin="5rem 0 0" textColor="tertiary" size={3} bold>
            Kyle Welch
          </Text>
          <Link
            href="https://slides.krwelch.com/rc-git-it-done"
            margin=".5rem 0 0"
            textColor="tertiary"
            size={0.75}
            italic
          >
            https://slides.krwelch.com/rc-git-it-done
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
