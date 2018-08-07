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
} from 'spectacle';
import TitleHeader from '../../components/TitleHeader';
import TwitterFooter from '../../components/TwitterFooter';
import DeckWrapper from '../../components/DeckWrapper';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  about: require('../../assets/about-me.png'),
  twitterLogo: require('../../assets/twitter-logo.svg'),
  githubLogo: require('../../assets/GitHub-Mark-120px-plus.png'),
  sponsors: require('../../assets/kcdc_sponsors.jpg'),

};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#008fb5',
    tertiary: '#f1c109',
    quartenary: '#979797',
    codePaneBg: '#2d2d2d',
    drawingBg: '#f9f9f9',
    commitBg: '1e1e1e',
  },
  {
    primary: 'Source Code Pro',
    secondary: 'Montserrat',
  }
);

export default class Presentation extends React.Component {
  static title = 'Git it Done: Effective Feature Development';
  render() {
    return (
      <DeckWrapper
        topContent={TitleHeader({
          theme,
          images,
          title: Presentation.title,
        })}
        bottomContent={TwitterFooter({ images, theme })}
      >
        <Deck
          transition={['slide']}
          transitionDuration={500}
          theme={theme}
          progress="pacman"
        >
          <Slide>
            <Heading>Web development is terrible, you should try it!</Heading>
          </Slide>

          <Slide>
            <Heading>CSS Blinds</Heading>
          </Slide>

          <Slide>
            <Heading>Classic HTML Head Tag</Heading>
          </Slide>

          <Slide>
            <Heading>Modern HTML Head Tag</Heading>
          </Slide>

          <Slide>
            <Heading>Timeline</Heading>
          </Slide>

          <Slide>
            <Heading>Atwood's Law</Heading>
          </Slide>

          <Slide>
            <Heading>Package.json Breakdown - Out of the Box `npm init -y`</Heading>
          </Slide>

          <Slide>
            <Heading>Package.json Breakdown - Package `eventbrite-sdk-javascript`</Heading>
          </Slide>

          <Slide>
            <Heading>Package.json Breakdown - App `family fued`</Heading>
          </Slide>

        </Deck>
      </DeckWrapper>
    );
  }
}
