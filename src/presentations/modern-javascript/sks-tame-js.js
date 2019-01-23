import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  Image,
  Appear,
  CodePane,
  Link,
  Layout,
  Fill,
} from 'spectacle';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import TitleHeader from '../../components/TitleHeader';
import TwitterFooter from '../../components/TwitterFooter';
import DeckWrapper from '../../components/DeckWrapper';
import AppearList from '../../components/AppearList';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const ogJSExample = `window.onload = function() {
  var div = document.createElement("DIV");
  var title = document.createElement("H1");
  var text = document.createTextNode(
    "Hello " + serverData.user.name
  );
  title.appendChild(text);
  div.appendChild(title);
  var paragraph = document.createElement("P");
  text = document.createTextNode("lorem ipsum...");
  paragraph.appendChild(text);
  div.appendChild(title);
  document.body.appendChild(div);
}`;

const images = {
  about: require('../../assets/about-me.png'),
  twitterLogo: require('../../assets/twitter-logo.svg'),
  githubLogo: require('../../assets/GitHub-Mark-120px-plus.png'),

  zbOriginal: require('./assets/zbths-2004.png'),
  sadWindow: require('./assets/sad-window.gif'),
  oneHour: require('./assets/one-hour-later.jpg'),

  npmLogo: require('./assets/npm-logo.png'),

  logoNode: require('./assets/node-logo.svg'),
  logoWebpack: require('./assets/webpack.svg'),
  logoChai: require('./assets/chai.png'),
  logoAngular: require('./assets/angular.png'),
  logoGatsby: require('./assets/gatsby.svg'),
  logoNPM: require('./assets/npm.png'),
  logoZeit: require('./assets/zeit.png'),
  logoStyledComponents: require('./assets/styled-components.png'),
  logoVue: require('./assets/vue.png'),
  logoGraphQL: require('./assets/graphql.png'),
  logoEmber: require('./assets/ember.png'),
  logoMocha: require('./assets/mocha.svg'),
  logoGulp: require('./assets/gulp.png'),
  logoBrowserify: require('./assets/browserify.png'),
  logoBabel: require('./assets/babel.png'),
  logoEslint: require('./assets/eslint-logo.jpg'),
  logoRedux: require('./assets/redux.png'),
  logoReact: require('./assets/react.svg'),
  logoJest: require('./assets/jest.png'),
  logoGrunt: require('./assets/grunt.svg'),
  logoNetlify: require('./assets/netlify.jpeg'),
  logoPrettier: require('./assets/prettier.png'),
  logoWebpack: require('./assets/webpack-logo.png'),
  logoEmotion: require('./assets/emotion.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: '#6e362a',
    secondary: '#feae02',
    tertiary: '#f1e2a0',
    quartenary: '#200c25',
    codePaneBg: '#2d2d2d',
    drawingBg: '#f9f9f9',
    commitBg: '#1e1e1e',
  },
  {
    primary: 'Orbitron',
    secondary: 'Montserrat',
  }
);

export default class Presentation extends React.Component {
  static title =
    'Taming the Wilderness - An Overview of the JavaScript Ecosystem';
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
            <Heading>Taming the Wilderness</Heading>
            <Heading fit textColor="drawingBg">
              An Overview of the JavaScript Ecosystem
            </Heading>
          </Slide>
          <Slide>
            <Heading fit style={{ marginTop: '-5rem' }}>
              Start at the beginning
            </Heading>
            <Image src={images.zbOriginal} height="70vh" />
          </Slide>
          <Slide bgColor="#FFF">
            <Appear>
              <Heading fit textColor={'secondary'}>
                Broken PHP Page
              </Heading>
            </Appear>
            <Appear>
              <div>
                <Text>It was missing a semi-colon.</Text>
                <br />
                <Text>Testing in Production 🎉</Text>
              </div>
            </Appear>
          </Slide>
          <Slide>
            <Heading>Era of jQuery</Heading>
            <Appear>
              <Image src={images.sadWindow} />
            </Appear>
          </Slide>

          <Slide bgColor={'secondary'}>
            <Heading fit textColor={'quartenary'}>
              Use the Platform
            </Heading>
            <CodePane source={ogJSExample} lang="js" textSize="24" />
          </Slide>

          <Slide bgColor="codePaneBg">
            <TwitterTweetEmbed
              tweetId={'1087397595012464640'}
              options={{
                align: 'center',
              }}
            />
          </Slide>

          <Slide>
            <Image
              src={images.oneHour}
              style={{
                height: '100vh',
                margin: '0',
                marginTop: '-11rem',
                marginLeft: '-25rem',
              }}
            />
          </Slide>

          <Slide bgColor={'codePaneBg'}>
            <div
              style={{
                margin: 0,
                marginLeft: '-12vw',
                width: '80vw',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'baseline',
              }}
            >
              {Object.keys(images)
                .filter(name => name.startsWith('logo'))
                .map(imageKey => {
                  return (
                    <Image
                      src={images[imageKey]}
                      style={{ flex: '0 1 auto', maxHeight: '150px' }}
                    />
                  );
                })}
            </div>
          </Slide>

          <Slide>
            <Heading>De-mystifying JavaScript</Heading>
          </Slide>

          <Slide>
            <Image src={images.npmLogo} width="300px" atl="npm" />
            <AppearList
              items={[
                <span>
                  Dependency Management
                  <br />
                  (🤔 think Nuget or pip)
                </span>,
                'No more vendors folder',
                <span>
                  More easily share code
                  <br />
                  (🏢 internally and 🌎 publicly)
                </span>,
              ]}
            />
          </Slide>
          <Slide>
            <Heading>Jest</Heading>
            <Image src={images.logoJest} height="150px" alt="jest logo" />
            <AppearList items={['Testing!!! 🎉', 'Build with confidence']} />
          </Slide>
          <Slide>
            <Image src={images.logoBabel} height="150px" alt="babel logo" />
            <AppearList
              items={[
                'Compiler/Transpiler',
                'No more waiting for browser support 🌐',
              ]}
            />
          </Slide>
          <Slide>
            <Image src={images.logoWebpack} height="150px" alt="webpack logo" />
            <AppearList items={['Bundler', 'Pack modules into assets 📦']} />
          </Slide>
          <Slide>
            <Image src={images.logoEslint} height="150px" alt="eslint logo" />
            <AppearList
              items={[
                'Pattern/Convention Checker',
                'Find code errors/problems earlier',
                'Enforce consistent & style guidelines',
              ]}
            />
          </Slide>
          <Slide>
            <Image
              src={images.logoPrettier}
              height="150px"
              alt="prettier logo"
            />
            <AppearList items={['Code Formatter', 'Reverse of Uglify']} />
          </Slide>

          <Slide bgColor={'quartenary'}>
            <Heading textColor={'tertiary'}>
              What made me love JS again?
            </Heading>
          </Slide>

          <Slide>
            <Heading>React</Heading>
            <Image src={images.logoReact} height="150px" alt="react logo" />

            <CodePane source="npx create-react-app <app-name>" lang="bash" />
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
              href="https://slides.krwelch.com/sks-tame-js"
              margin=".5rem 0 0"
              textColor="tertiary"
              size={0.75}
              italic
            >
              https://slides.krwelch.com/sks-tame-js
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
