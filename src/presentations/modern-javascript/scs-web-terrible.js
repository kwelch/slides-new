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
  BlockQuote,
  Quote,
  Cite,
  List,
  ListItem,
} from 'spectacle';
import TitleHeader from '../../components/TitleHeader';
import TwitterFooter from '../../components/TwitterFooter';
import DeckWrapper from '../../components/DeckWrapper';
import AppearList from '../../components/AppearList';
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
  overflow: require('./assets/overflow.gif'),

  npmLogo: require('./assets/npm-logo.png'),
  webpackLogo: require('./assets/webpack-logo.png'),
  eslintLogo: require('./assets/eslint-logo.jpg'),
  babelLogo: require('./assets/babel-logo.jpg'),
  jestLogo: require('./assets/jest-logo.png'),

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
            <Heading>Timeline</Heading>
            <AppearList
              items={[
                '1995 - LiveScript is born',
                '1997 - ECMAScript Standardized',
                '2000 - AJAX 🎉 (2002 JSON & SPA)',
              ]}
            />
          </Slide>
          <Slide>
            <Heading>Timeline</Heading>
            <Heading>2004</Heading>
            <Text fit textColor="white">
              I became a dev!
            </Text>
            <Text textColor="white" margin="5rem 0 0 ">
              FireFox 🔥 🦊
            </Text>
          </Slide>
          <Slide>
            <Heading>Timeline</Heading>
            <AppearList
              items={['2006 - JQuery & 🔥🐛', '2009 - ES5 (CommonJS & Node)']}
            />
          </Slide>

          <Slide bgColor={'tertiary'}>
            <BlockQuote>
              <Quote>Node is just a fad</Quote>
              <Appear>
                <Cite textColor="black">Me (2011)</Cite>
              </Appear>
            </BlockQuote>
          </Slide>
          <Slide>
            <Heading>Timeline</Heading>
            <AppearList
              items={[
                '2013 - React Open Sourced',
                '2015 - ES5 (ES2015) & React Native',
              ]}
            />
          </Slide>

          <Slide>
            <Heading fit>Angular Timeline</Heading>
            <AppearList
              items={[
                '2010 - V1 AngularJS (Active Dev in 2018)',
                '2016 - V2',
                '2016 - V4',
                '2017 - V5',
                '2018 - V6',
                '2018 - V7',
              ]}
            />
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
            <Layout>
              <TweetComponent id="1450775823" options={{ theme: 'dark' }} />
            </Layout>
          </Slide>

          <Slide>
            <Heading fit>Rise of Package Managers</Heading>

            <Image src={images.npmLogo} width="100%" alt="npm logo" />
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
            <Appear>
              <Image src={images.babelLogo} width="200px" alt="npm logo" />
            </Appear>
            <Appear>
              <Image
                src={images.webpackLogo}
                width="200px"
                alt="webpack logo"
              />
            </Appear>
            <Appear>
              <Image src={images.eslintLogo} width="200px" alt="eslint logo" />
            </Appear>
            <Appear>
              <Image src={images.jestLogo} width="200px" alt="jest logo" />
            </Appear>
          </Slide>


          <Slide>
            <Appear>
              <Image
                src={images.overflow}
                width="100%"
                alt="Too much food in small container"
              />
            </Appear>
          </Slide>

          <Slide>
            <Appear>
              <Image
                src={images.darkSideCookies}
                width="100%"
                alt="Come to the dark side, we have cookies"
              />
            </Appear>
          </Slide>

          <Slide>
            <Heading>Resources</Heading>
            <List>
              {[
                { link: 'https://www.npmjs.com/', display: 'npm' },
                { link: 'https://webpack.js.org/', display: 'webpack' },
                { link: 'https://babeljs.io/', display: 'babel' },
                {
                  link:
                    'https://facebook.github.io/jest/docs/en/getting-started.html',
                  display: 'jest',
                },
                { link: 'hthttps://eslint.org/', display: 'eslint' },
              ].map(item => (
                <ListItem>
                  <Link href={item.link}>{item.display}</Link>
                </ListItem>
              ))}
            </List>
          </Slide>

          <Slide
            bgColor="drawingBg"
            transition={['slide']}
            style={{
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
              href="https://slides.krwelch.com/scs-web-terrible"
              margin=".5rem 0 0"
              textColor="tertiary"
              size={0.75}
              italic
            >
              https://slides.krwelch.com/scs-web-terrible
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
      </DeckWrapper>
    );
  }
}
