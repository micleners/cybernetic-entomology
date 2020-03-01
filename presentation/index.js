import CodeSlide from 'spectacle-code-slide';
import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {
  themeColors,
  H1Norm,
  H1Col1,
  H2,
  FlexRowCenter,
  ListItemIndent,
  AquaText
} from './helpers';
import { Title, Closing, HowToSquashBugs, Testing, AboutMe } from './slides';
import './styles.css';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  Link
} from 'spectacle';
import { BugSlide } from './components/slides';
import { Flex } from 'rebass';

require('normalize.css');

const images = {
  bug: require('../assets/bug.svg').default,
  sweep_bug: require('../assets/sweep_bug.svg').default,
  twitter: require('../assets/twitter.png').default,
  unitIntegration: require('../assets/unit-v-integration.gif').default,
  doorGuardIntegration: require('../assets/door-gaurd-sync.gif').default,
  window: require('../assets/windows.gif').default,
  pyramid: require('../assets/test_pyramid.png').default,
  pyramid2: require('../assets/test_pyramid2.png').default,
  boxes: require('../assets/blackbox_whitebox.svg').default,
  testingLevels: require('../assets/testing_levels.svg').default,
  nike: require('../assets/nike.png').default,
  repeat: require('../assets/repeat.svg').default
};

const theme = createTheme(themeColors, {
  primary: {
    name: 'Oxygen Mono',
    googleFont: true,
    styles: ['400', '700i']
  },
  secondary: {
    name: 'Roboto Mono',
    googleFont: true,
    styles: ['400', '700i']
  }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        contentWidth={1400}
        theme={theme}
        bgColor="dark"
      >
        <Title />
        <AboutMe />
        <BugSlide text="Why are tests important?" />

        <Slide transition={['zoom']} bgColor="dark">
          <H2>Worked on my machine!</H2>
          <Image src={images.window} width="1000px" />
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <H1Norm>
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Talk Outline
            </Flex>
          </H1Norm>
          <List style={{ marginLeft: 250 }} textColor="text">
            <ListItem>Tests we automate</ListItem>
            <ListItem>Tests done manually</ListItem>
            <ListItem>Non-functional requirements</ListItem>
            <ListItem>Severity ranking and testing scope</ListItem>
            <ListItem>Timing of tests and environments</ListItem>
            <ListItem>Team/Cross Team Dynamics</ListItem>
          </List>
        </Slide>

        <BugSlide text="What tests do we automate?" />
        <Slide transition={['zoom']} bgColor="dark">
          <H1Norm>
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Tests we automate
            </Flex>
          </H1Norm>
          <List style={{ marginLeft: 250 }} textColor="text">
            <ListItem>Unit tests</ListItem>
            <ListItem>Integration tests</ListItem>
            <ListItem>API tests</ListItem>
            <ListItem>Acceptance tests</ListItem>
            <ListItem>End-to-end tests</ListItem>
          </List>
        </Slide>

        <BugSlide
          text="What distinguished unit tests from integration tests?"
          size={4}
        />
        <Slide transition={['zoom']} bgColor="dark">
          <Image src={images.unitIntegration} width="1000px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Test pieces individually<br></br> and as a whole
            </Flex>
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <ListItem>
              <AquaText>Unit:</AquaText> Locking mechanism works
            </ListItem>
            <ListItem>
              <AquaText>Unit:</AquaText> Door slides
            </ListItem>
            <ListItem>
              <AquaText>Integration:</AquaText> Lock prevents/enables sliding
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Image src={images.pyramid} />
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={2} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              🤔 Important questions
            </Flex>
          </Heading>
          <List style={{ marginLeft: 150 }} textColor="text">
            <ListItem>
              How small is a <AquaText>unit</AquaText>?
            </ListItem>
            <ListItem>
              How do we <AquaText>mock dependencies</AquaText>?
            </ListItem>
            <ListItem>
              What is <AquaText>depth of testing</AquaText>?
            </ListItem>
            <ListItem>
              How do we analyse <AquaText>code coverage</AquaText>?
            </ListItem>
            <ListItem>
              How do we <AquaText>mock the database</AquaText>?
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Image
            src={images.boxes}
            bgColor="lightText"
            padding={50}
            height="700px"
          />
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Black Box vs. White Box
            </Flex>
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <ListItem>
              <AquaText>Black Box:</AquaText> Hit an API and expect a response
            </ListItem>
            <ListItem>
              <AquaText>White Box:</AquaText> Call a service and check state
              change
            </ListItem>
            <br />
            <ListItem>
              <AquaText>Black Box:</AquaText> Check rendered state of component
            </ListItem>
            <ListItem>
              <AquaText>White Box:</AquaText> Test individual methods
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>How much should tests overlap?</H2>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <H2>Enough to prevent this</H2>
          <Image src={images.doorGuardIntegration} height="600px" />
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <H2>Testing levels</H2>
          <a href="https://www.figma.com/file/OxN58ihRfeVFoGwKNknNf3/Dev-Diagrams?node-id=0%3A1">
            <Image
              bgColor="lightText"
              src={images.testingLevels}
              height="600px"
            />
          </a>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Thoughts on Integration Tests
            </Flex>
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <ListItem>
              Can be done <AquaText>within unit testing</AquaText> framework
            </ListItem>
            <ListItem>
              <AquaText>API frameworks:</AquaText> Cucumber, Rest Assured,
              PostMan
            </ListItem>
            <ListItem>
              <AquaText>UI frameworks:</AquaText> Selenium, Cypress, Capybara
            </ListItem>
            <ListItem>
              Blog:{' '}
              <a href="https://www.toptal.com/java/unit-integration-junit-tests">
                <AquaText>Unit vs Integration Tests in Java</AquaText>
              </a>
            </ListItem>
            <ListItem>
              Blog:{' '}
              <a href="https://engineering.helpscout.com/testing-code-that-talks-to-the-database-7d15a5391fb9">
                <AquaText>Testing Code that Talks to the DB</AquaText>
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <H1Col1>Automated E2E & API Testing</H1Col1>
          <br />
          <H2>The gift that keeps on giving 🎁</H2>
          <br />
          <List style={{ marginLeft: 150 }} textColor="text">
            <ListItem>Catch more defects in development</ListItem>
            <ListItem>Tightens communication within team</ListItem>
            <ListItem>Serves as regression test suite</ListItem>
            <ListItem>
              See{' '}
              <a href="https://github.com/micleners/cypress-retro/">
                <AquaText>Talk on Cypress for more info</AquaText>
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <H2 style={{ paddingBottom: 40 }}>
            But don't forget your test pyramid!
          </H2>
          <Image src={images.pyramid2} height="500px" />
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>What tests happen outside automation?</H2>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Tests outside of dev flow
            </Flex>
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <ListItem>Regression testing vs Smoke testing</ListItem>
            <ListItem>Load testing and performance testing</ListItem>
            <ListItem>Security and penetration testing</ListItem>
            <ListItem>Usability and exploratory testing</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>How does a team design a test plan that's best for them?</H2>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Flex alignItems="center" justifyContent="space-around" mx="300px">
            <img src={images.sweep_bug} width="300px" />
          </Flex>
          <H2>It gets dictated from the top down</H2>
          <H2>¯\_(ツ)_/¯</H2>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Flex alignItems="center" justifyContent="space-around" mx="300px">
            <img src={images.nike} width="300px" />
            <img src={images.sweep_bug} width="300px" />
          </Flex>
          <H2>Have the conversations.</H2>
          <H2>Document whats important to test.</H2>
          <H2>Revise and revisit the plan often.</H2>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Considerations on test plans
            </Flex>
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <ListItem>
              What are <AquaText>client needs</AquaText>?
            </ListItem>
            <ListItem>
              What are <AquaText>application needs</AquaText>?
            </ListItem>
            <ListItem>
              What are <AquaText>compliance needs</AquaText>?
            </ListItem>
            <ListItem>
              What is <AquaText>developer/QA preference</AquaText> and
              <AquaText> experience</AquaText>?
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Flex alignItems="center" justifyContent="space-around" mx="300px">
            <img src={images.repeat} width="300px" />
            <img src={images.sweep_bug} width="300px" />
          </Flex>
          <H2>Have serious discussions on testing.</H2>
          <H2>Have a common consensus.</H2>
          <H2>Assess blind spots often.</H2>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              More considerations on test plans
            </Flex>
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <ListItem>
              <AquaText>Level of automation</AquaText>
            </ListItem>
            <ListItem>
              Purpose of <AquaText>manual testing</AquaText>
            </ListItem>
            <ListItem>
              <AquaText>Testing flow</AquaText> in sprint vs outside of sprint
            </ListItem>
            <ListItem>
              <AquaText>Data management</AquaText> for e2e, manual, and load
              testing
            </ListItem>
            <ListItem>
              <AquaText>Test case</AquaText> organization and record keeping
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              More considerations on test plans
            </Flex>
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <ListItem>
              <AquaText>Level of automation</AquaText>
            </ListItem>
            <ListItem>
              Purpose of <AquaText>manual testing</AquaText>
            </ListItem>
            <ListItem>
              <AquaText>Testing flow</AquaText> in sprint vs outside of sprint
            </ListItem>
            <ListItem>
              <AquaText>Data management</AquaText> for e2e, manual, and load
              testing
            </ListItem>
            <ListItem>
              <AquaText>Test case</AquaText> organization and record keeping
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>How do we designate test cases that are more important?</H2>
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Use a Severity Level Ranking
            </Flex>
          </Heading>
          <Heading size={5} textColor="text">
            Label both test cases and stories with severity:
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <Heading size={5} textColor="text">
              Label both test cases and stories with severity:
            </Heading>
          </List>
        </Slide>

        <Testing />
        <Closing />
      </Deck>
    );
  }
}
