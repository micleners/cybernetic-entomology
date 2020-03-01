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
  boxes: require('../assets/blackbox_whitebox.svg').default,
  testingLevels: require('../assets/testing_levels.svg').default
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
          <H2>Why are tests important?</H2>
          <Image src={images.doorGuardIntegration} height="600px" />
        </Slide>

        <Slide transition={['zoom']} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>What kind of tests do automate?</H2>
        </Slide>

        <Testing />
        <Closing />
      </Deck>
    );
  }
}
