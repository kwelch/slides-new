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
  Appear,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  about: require('../../assets/about-me.png'),
  twitterLogo: require('../../assets/twitter-logo.svg'),
  githubLogo: require('../../assets/GitHub-Mark-120px-plus.png'),

  intro: require('./assets/cover-image.png'),
  master: require('./assets/master-commits.png'),
  branch: require('./assets/branch-single-commit.png'),
  secondBranch: require('./assets/secondary-branch.png'),
  commits: require('./assets/xkcd_commit.png'),
  branches: require('./assets/yo-dawg-branches.jpg'),
  merge: require('./assets/merge.png'),
  rebaseOne: require('./assets/rebaseOne.png'),
  rebaseTwo: require('./assets/rebaseTwo.png'),
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
    commitBg: '1e1e1e',
  },
  {
    primary: 'Source Code Pro',
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

        <Slide transition={['fade']}>
          <Heading>Master Tree</Heading>
          <Appear>
            <Image
              src={images.master}
              style={{ marginTop: '6rem', border: '10px solid #008fb5' }}
            />
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="60">Leaf me alone</Heading>
          <Appear>
            <Image src={images.commits} style={{ marginTop: '2rem' }} />
          </Appear>
          <Appear>
            <Text>
              <Link textSize="24" textColor="codePaneBg" href="https://xkcd.com/1296/">
                Source: XKCD
              </Link><br/><br/>
              <Link textSize="32" textColor="secondary" href="https://chris.beams.io/posts/git-commit/">
                Sevent Rules for Great Commits :wink:
              </Link>
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="78">Branch Out</Heading>
          <Layout>
            <Fill>
              <Appear>
                <Image
                  src={images.branch}
                  style={{
                    border: '10px solid #979797',
                    width: '20vw',
                    margin: '2rem',
                  }}
                />
              </Appear>
            </Fill>

            <Fill>
              <Appear>
                <Image
                  src={images.secondBranch}
                  style={{
                    border: '10px solid #979797',
                    width: '30vw',
                    margin: '2rem',
                  }}
                />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="codePaneBg">
          <Image src={images.branches} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="58" margin="0rem 0 4rem">
            Back to Base-ics
          </Heading>
          <Layout>
            <Appear>
              <Fill>
                <Text textSize="32">Merge</Text>
                <Image
                  src={images.merge}
                  style={{
                    border: '10px solid #979797',
                    width: '20vw',
                    margin: '2rem',
                  }}
                />
              </Fill>
            </Appear>

            <Fill>
              <Appear>
                <Fill>
                  <Text textSize="32">Rebase</Text>
                  <Image
                    src={images.rebaseOne}
                    style={{
                      margin: '2rem',
                      border: '10px solid #979797',
                      width: '30vw',
                    }}
                  />
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text>Squash</Text>
                  <Image
                    src={images.rebaseTwo}
                    style={{
                      border: '10px solid #979797',
                      width: '30vw',
                    }}
                  />
                </Fill>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']}>
          <Heading>Git is hard</Heading>
          <Appear>
            <Heading style={{ marginTop: '6rem' }}>
              <Link href="http://ohshitgit.com" textColor="secondary">
                Oh Shit, Git!
              </Link>
            </Heading>
          </Appear>
          <Appear>
            <Text>You are not alone</Text>
          </Appear>
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
