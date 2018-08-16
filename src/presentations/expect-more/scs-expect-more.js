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
  BlockQuote,
  Quote,
  Cite,
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
  sponsors: require('../../assets/kcdc_sponsors.jpg'),

  intro: require('./assets/ds_cover-slide.png'),
  jest: require('./assets/jest-logo.png'),
  raincoat: require('./assets/full-coverage.png'),
  umbrella: require('./assets/top-coverage.png'),
  plug: require('./assets/plug.png'),
  lifeUnitTests: require('./assets/life-unit-tests.png'),
  time: require('./assets/time.jpeg'),
  threeAs: require('./assets/three-a-of-testing.png'),
  measureFail: require('./assets/measure.gif'),
  jestPlatform: require('./assets/jest-as-platform.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: '#CECECE',
    secondary: '#1F2022',
    tertiary: '#99424f', //'#03A9FC',
    quartenary: 'white',
    codePaneBg: '#2d2d2d',
    drawingBg: '#f9f9f9',
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

          <Slide>
            <Heading fit>Why?</Heading>
            <AppearList
              textColor="tertiary"
              items={['Confidence', 'Documentation', 'Lazy']}
            />
          </Slide>

          <Slide bgColor="codePaneBg">
            <Image src={images.time} />
          </Slide>

          <Slide bgColor={'tertiary'}>
            <Heading fit textColor={'quartenary'}>
              What?
            </Heading>
            <AppearList textColor={'quartenary'} items={['Everything!']} />
          </Slide>

          <Slide bgColor={'drawingBg'}>
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

          <Slide bgColor={'tertiary'}>
            <BlockQuote>
              <Quote>Test it how it is meant to be used</Quote>
              <Appear>
                <Cite textColor={'quartenary'}>Me (just now)</Cite>
              </Appear>
            </BlockQuote>
          </Slide>

          <Slide bgColor={'tertiary'}>
            <Heading fit textColor={'quartenary'}>
              What?
            </Heading>
            <AppearList
              textColor={'quartenary'}
              items={[
                <span style={{ textDecoration: 'line-through' }}>
                  Everything!
                </span>,
                'Critical Path',
                'Bugs',
                'Eveything, maybe?',
              ]}
            />
          </Slide>

          <Slide bgColor={'codePaneBg'}>
            <Heading fit textColor={'drawingBg'}>
              How?
            </Heading>
          </Slide>

          <Slide bgColor="drawingBg">
            <Image src={images.jest} height={150} />
            <Heading style={{ lineHeight: '10rem' }}>
              Delightful JavaScript Testing
            </Heading>
            <Notes>
              <ul>
                <li>All in one</li>
                <li>assertions</li>
                <li>watch mode</li>
                <li>Spy</li>
                <li>Coverage</li>
              </ul>
            </Notes>
          </Slide>
          <Slide bgColor={'codePaneBg'}>
            <video
              style={{ height: '100vh', margin: '-20vh -25vw' }}
              autoPlay={true}
              controls={true}
            >
              <source
                src={require('./assets/install-run-jest.mp4')}
                type="video/mp4"
              />
            </video>
          </Slide>

          <Slide bgColor={'codePaneBg'}>
            <Heading fit textColor={'drawingBg'}>
              How?
            </Heading>
            <List textColor={'drawingBg'}>
              <ListItem>Arrange</ListItem>
              <ListItem>Act</ListItem>
              <ListItem>Assert</ListItem>
            </List>
          </Slide>
          <Slide bgColor={'codePaneBg'}>
            <Heading textColor={'drawingBg'} style={{ marginTop: '-15vh' }}>
              How?
            </Heading>
            <Image src={images.threeAs} width="100%" />
            <Link
              href="https://github.com/coryhouse/react-slingshot/blob/master/src/utils/fuelSavings.spec.js#L31-L40"
              textColor={'drawingBg'}
            >
              Source - React Slingshot
            </Link>
          </Slide>

          <Slide bgColor={'tertiary'}>
            <Heading textColor={'primary'}>Measure</Heading>
            <Appear>
              <Image src={images.measureFail} width={'50vw'} />
            </Appear>
          </Slide>

          <Slide bgColor={'tertiary'}>
            <video
              style={{ height: '100vh', margin: '-20vh -25vw' }}
              autoPlay={true}
              controls={true}
            >
              <source src={require('./assets/coverage.mp4')} type="video/mp4" />
            </video>
          </Slide>

          <Slide bgColor={'primary'}>
            <Heading textColor={'codePaneBg'}>What's Next?</Heading>
            <Appear>
              <Image src={images.jestPlatform} width={'55vw'} />
            </Appear>
          </Slide>

          <Slide bgColor={'codePaneBg'}>
            <Heading fit textColor={'drawingBg'}>
              Questions?
            </Heading>
            <Appear>
              <Text textColor={'tertiary'}>SDK Demo, if time</Text>
            </Appear>
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
                <Link href="https://www.youtube.com/watch?v=ZJ43STkmK-4">
                  Jest as a Platform - Rogelio Guzman (Real World React)
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
              <ListItem>
                <Link href="https://medium.com/@chrisholland/moving-parts-bfdcaa25b79d">
                  Moving Parts by Chris Holland
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/NashReact/jest-exercises">
                  Jest Exercises
                </Link>
              </ListItem>
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
              href="https://slides.krwelch.com/scs-expect-more"
              margin=".5rem 0 0"
              textColor="tertiary"
              size={0.75}
              italic
            >
              https://slides.krwelch.com/scs-expect-more
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
