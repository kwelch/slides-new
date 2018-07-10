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
import AppearList from '../../components/AppearList';
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

  intro: require('./assets/cover-image.png'),
  master: require('./assets/master-commits.png'),
  branch: require('./assets/branch-single-commit.png'),
  secondBranch: require('./assets/secondary-branch.png'),
  commits: require('./assets/xkcd_commit.png'),
  branches: require('./assets/yo-dawg-branches.jpg'),
  merge: require('./assets/merge.png'),
  rebaseOne: require('./assets/rebaseOne.png'),
  rebaseTwo: require('./assets/rebaseTwo.png'),
  wtf: require('./assets/wtfm.jpg'),
  gitHubFlow: require('./assets/github-flow.jpeg'),
  gitFlowModel: require('./assets/git-flow-model.png'),
  gitFlowCondensed: require('./assets/git-flow-condensed.jpeg'),
  automate: require('./assets/automate_all_the_things.jpeg'),
  collaborate: require('./assets/collaborate.gif'),
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
          <Slide
            transition={['slide']}
            style={{
              backgroundColor: '#f9f9f9',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
              backgroundImage: `url(${images.sponsors})`,
            }}
          />
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
                <Link
                  textSize="24"
                  textColor="codePaneBg"
                  href="https://xkcd.com/1296/"
                >
                  Source: XKCD
                </Link>
                <br />
                <br />
                <Link
                  textSize="32"
                  textColor="secondary"
                  href="https://chris.beams.io/posts/git-commit/"
                >
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

          <Slide>
            <blockquote className="twitter-tweet" data-lang="en">
              <div>
                <video
                  preload="none"
                  autoPlay={true}
                  poster="https://pbs.twimg.com/tweet_video_thumb/DhcaK92W4AkAMbR.jpg"
                  src="https://video.twimg.com/tweet_video/DhcaK92W4AkAMbR.mp4"
                  type="video/mp4"
                />
              </div>
              <p lang="en" dir="ltr">
                🖥 Visualization of git merge<br />
                <br />🤔 I wonder what the guy bypassing everyone at the end is
                thinking
              </p>&mdash; 𝙴𝚕𝚒𝚓𝚊𝚑 𝙼𝚊𝚗𝚘𝚛 (@elijahmanor)
              <a href="https://twitter.com/elijahmanor/status/1015309250602635264?ref_src=twsrc%5Etfw">
                July 6, 2018
              </a>
            </blockquote>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />
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

          <Slide bgColor="codePaneBg">
            <Heading textColor="secondary" textSize="60">
              Push-ing Beyond
            </Heading>
            <AppearList
              textColor="primary"
              items={[
                'Master Branch FTW!',
                'GitHub Style / Feature Branching',
                'GitFlow',
                'Custom',
              ]}
            />
          </Slide>

          <Slide bgColor="#f8f7f5">
            <Heading>Git Hub Flow</Heading>
            <Image src={images.gitHubFlow} />
            <Text>
              <Link
                href="https://www.endpoint.com/blog/2014/05/02/git-workflows-that-work/"
                textColor="secondary"
              >
                Source
              </Link>
            </Text>
          </Slide>

          <Slide>
            <Heading>Git Flow</Heading>
            <Image src={images.gitFlowModel} height="50vh" />
            <Text>
              <Link
                href="http://nvie.com/posts/a-successful-git-branching-model/"
                textColor="secondary"
              >
                Source
              </Link>
            </Text>
          </Slide>

          <Slide bgColor="#f8f7f5">
            <Heading>Git Flow</Heading>
            <Image src={images.gitFlowCondensed} />
            <Text>
              <Link
                href="https://www.endpoint.com/blog/2014/05/02/git-workflows-that-work/"
                textColor="secondary"
              >
                Source
              </Link>
            </Text>
          </Slide>

          <Slide>
            <Heading>Custom</Heading>
            <Appear>
              <Heading textColor="secondary">?</Heading>
            </Appear>
          </Slide>

          <Slide bgColor="codePaneBg" transition={['fade']}>
            <Heading textColor="primary">STOP! Collaborate!</Heading>
            <Image src={images.collaborate} />
          </Slide>

          <Slide bgColor="primary">
            <Appear>
              <Fill>
                <Heading textColor="secondary" textSize="60">
                  Going Remote
                </Heading>
                <Image src={images.githubLogo} />
              </Fill>
            </Appear>
          </Slide>

          <Slide transition={['fade']}>
            <Heading>What is git good for?</Heading>
            <Text style={{ height: '16.5rem' }}>Absolutely Nothing</Text>
          </Slide>

          <Slide transition={['fade']}>
            <Heading>What is git good for?</Heading>
            <Text style={{ textDecoration: 'line-through' }}>
              Absolutely Nothing
            </Text>
            <AppearList
              textColor="secondary"
              items={['Code Style', 'Mentoring', 'Validation / Testing']}
            />
          </Slide>

          <Slide bgColor="codePaneBg" transition={['fade']}>
            <Image src={images.wtf} />
          </Slide>

          <Slide bgColor="codePaneBg" transition={['fade']}>
            <Image src={images.automate} />
          </Slide>

          <Slide>
            <Heading>Check Out</Heading>
            <Text>These automation tools</Text>
            <Layout>
              <AppearList
                items={['TravisCI', 'Appveyor', 'Codecov', 'AppCenter', 'Bots']}
              />
            </Layout>
          </Slide>

          <Slide bgColor="codePaneBg">
            <Heading textColor="secondary">Q &amp; A</Heading>
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
                <Text style={{ textAlign: 'left' }}>
                  <Image
                    src={images.githubLogo}
                    style={{ height: 30, margin: '0 10px 0' }}
                  />
                  /kwelch
                </Text>
              </Fill>
              <Fill>
                <Text textColor="tertiary" style={{ textAlign: 'right' }}>
                  <Image
                    src={images.twitterLogo}
                    style={{ height: 25, margin: '0 10px 0' }}
                  />
                  @kylewelch
                </Text>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </DeckWrapper>
    );
  }
}
