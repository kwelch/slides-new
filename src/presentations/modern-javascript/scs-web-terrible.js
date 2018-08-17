/* eslint-disable react/prop-types, import/no-webpack-loader-syntax */
import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  Appear,
  Link,
  Layout,
  Fill,
  Image,
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

  cssBlinds: require('./assets/css-blinds.gif'),
  classicHTML: require('./assets/classic-html-head.png'),
  slideHTML: require('./assets/slide-entire-html.png'),
  darkSideCookies: require('./assets/dark-side-cookies.jpg'),

  basicPackageJson: require('./assets/basicPackageJson.png'),
  sdkPackageJson: require('./assets/sdkPackageJson.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: '#1e1e1e',
    secondary: '#008fb5',
    tertiary: '#f1c109',
    quartenary: '#f9f9f9',
    codePaneBg: '#2d2d2d',
    drawingBg: '#f9f9f9',
    commitBg: '#1e1e1e',
  },
  {
    primary: 'Source Code Pro',
    secondary: 'Montserrat',
  }
);

class TweetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.tweetDiv;
  }

  componentDidMount() {
    if (
      global.twttr &&
      global.twttr.widgets &&
      global.twttr.widgets.createTweet
    ) {
      global.twttr.widgets.createTweet(
        this.props.id,
        this.tweetDiv,
        this.props.options
      );
    }
  }

  render() {
    return (
      <div
        style={{ margin: 'auto' }}
        ref={ref => {
          this.tweetDiv = ref;
        }}
      />
    );
  }
}

export default class Presentation extends React.Component {
  static title = 'Web development is terrible, you should try it!';
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
            <Heading fit>Web development is terrible</Heading>
            <Appear>
              <Text textColor="quartenary" textSize="32" textFont="secondary">
                you should try it!
              </Text>
            </Appear>
          </Slide>

          <Slide>
            <Image src={images.cssBlinds} width="100%" alt="CSS Blinds Gif" />
          </Slide>

          <Slide>
            <Image
              src={images.classicHTML}
              width="150%"
              style={{ marginLeft: '-10rem', marginTop: '-10rem' }}
              alt="HTML Head tag with crazy script imports"
            />
          </Slide>

          <Slide>
            <Image
              src={images.slideHTML}
              width="150%"
              style={{ marginLeft: '-10rem' }}
              alt="HTML minimalized, requires JavaScript"
            />
          </Slide>

          <Slide>
            <Heading>Timeline</Heading>
          </Slide>

          <Slide>
            <Layout>
              <TweetComponent id="1450775823" options={{ theme: 'dark' }} />
            </Layout>
          </Slide>

          <Slide>
            <Image
              src={images.basicPackageJson}
              width="100%"
              alt="Default package.json"
            />
          </Slide>

          <Slide>
            <Text textSize="14" style={{ marginTop: '-8rem' }}>
              <Link
                textColor="drawingBg"
                href="https://github.com/eventbrite/eventbrite-sdk-javascript/blob/fe3cc95c88aaa73843091c69beb909b103a0e9ff/package.json"
              >
                EB SDK package.json
              </Link>
            </Text>
            <Image
              src={images.sdkPackageJson}
              width="100%"
              alt="Customized package.json for Eventbrite JavaScript SDK"
            />
          </Slide>

          <Slide>
            <Heading>Tools</Heading>
          </Slide>
        </Deck>
      </DeckWrapper>
    );
  }
}
