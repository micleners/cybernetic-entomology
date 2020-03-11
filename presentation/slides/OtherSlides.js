import React from "react";
import createTheme from "spectacle/lib/themes/default";
import {
  themeColors,
  H1Norm,
  H1Col1,
  H2,
  FlexRowCenter,
  ListItemIndent,
  AquaText
} from "../helpers";
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
} from "spectacle";
import { Flex } from "rebass";

const bugSweep = require("../../assets/sweep_bug.svg").default;
const qr = require("../../assets/qr.png").default;
const nike = require("../../assets/nike.png").default;
const repeat = require("../../assets/repeat.svg").default;
const testingLevels = require("../../assets/testing_levels.svg").default;

export const RunTestsOftenAndEveryhere = ({ text }) => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Flex justifyContent="center" alignItems="center">
      <img src={bugSweep} width="200px" />
      <Flex flexDirection="column" alignItems="flex-start">
        <Heading textColor="lightText" size={4}>
          Often and everywhere
        </Heading>
        <Heading textColor="text" size={5}>
          Examples:
        </Heading>
      </Flex>
    </Flex>
    <List style={{ marginLeft: 50 }} textColor="text">
      <ListItem>locally & at build time:</ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>unit, integration, api/e2e</AquaText>
      </ListItem>
      <ListItem>on each deploy:</ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>automated API tests and E2E test suite</AquaText>
      </ListItem>
      <ListItem>on-going:</ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>smoke testing, regression testing, user testing</AquaText>
      </ListItem>
      <ListItem>prior to prod release:</ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>security, penetration, rigorous regression</AquaText>
      </ListItem>
    </List>
  </Slide>
);

export const TestsOutsideOfAutomation = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Tests outside of dev flow
      </Flex>
    </Heading>
    <List style={{ marginLeft: 250 }} textColor="text">
      <ListItem>Regression testing vs. Smoke testing</ListItem>
      <ListItem>Load testing and performance testing</ListItem>
      <ListItem>Security and penetration testing</ListItem>
      <ListItem>Usability and exploratory testing</ListItem>
    </List>
  </Slide>
);

export const InsideOrOutsideOfScope = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Decide what is inside and outside of scope
      </Flex>
    </Heading>
    <List style={{ marginLeft: 50 }} textColor="text">
      <ListItem>
        <AquaText>In Scope Examples:</AquaText>
      </ListItem>
      <ListItem style={{ marginLeft: 50 }}>
        Code you write (modules, components, services)
      </ListItem>
      <ListItem style={{ marginLeft: 50 }}>Data management layers</ListItem>

      <ListItem>
        <AquaText>Out of Scope Examples:</AquaText>
      </ListItem>
      <ListItem style={{ marginLeft: 50 }}>Mobile or Tablet testing</ListItem>
      <ListItem style={{ marginLeft: 50 }}>3rd party API testing</ListItem>
      <ListItem style={{ marginLeft: 50 }}>
        Browsers: Only Chrome, not IE
      </ListItem>
    </List>
  </Slide>
);

export const QACommunication = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Communication between Devs, QA, and beyond
      </Flex>
    </Heading>
    <List style={{ marginLeft: 50 }} textColor="text">
      <ListItem>Variables:</ListItem>
      <ListItem style={{ marginLeft: 50 }}>
        <AquaText>Is QA is embedded or on a separate team?</AquaText>
      </ListItem>
      <ListItem style={{ marginLeft: 50 }}>
        <AquaText>Who writes test cases?</AquaText>
      </ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>Who writes automated tests?</AquaText>
      </ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}></ListItem>
      <ListItem>Clear expectations up front 👍</ListItem>
      <ListItem>Our best practice:</ListItem>
      <ListItem style={{ marginLeft: 50 }}>
        <AquaText>Whiteboard session starting story & testing</AquaText>
      </ListItem>
      <ListItem style={{ marginLeft: 50 }}>
        <AquaText>Reconcile test cases w/ manual vs. automated</AquaText>
      </ListItem>
    </List>
  </Slide>
);

export const GetUsersInFrontOfApplication = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Image src={bugSweep} width="300px" />
    <H2>Getting a user in front of your application and trying it out</H2>
  </Slide>
);

export const ConsiderationsOnUserTesting = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        User testing:
      </Flex>
    </Heading>
    <List style={{ marginLeft: 200 }} textColor="text">
      <ListItem>Picking the demographic:</ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>users, customers, random people</AquaText>
      </ListItem>
      <ListItem>Type of tests:</ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>guided testing or exploratory testing</AquaText>
      </ListItem>
      <ListItem>What devices/browsers will you use?</ListItem>
    </List>
  </Slide>
);

export const NonFunctionalRequirements = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Your guess is as good as mine
      </Flex>
    </Heading>
    <List style={{ marginLeft: 250 }} textColor="text">
      <ListItem>Load testing (frontend & APIs)</ListItem>
      <ListItem>Performance testing</ListItem>
      <ListItem style={{ marginLeft: 50 }}>
        <AquaText>On different devices and browsers</AquaText>
      </ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>Web App and API response time</AquaText>
      </ListItem>
      <ListItem>Scalability</ListItem>
      <ListItem>Localization/Internationalization</ListItem>
      <ListItem style={{ marginLeft: 50, paddingBottom: 10 }}>
        <AquaText>Timezones, Currency, Languages</AquaText>
      </ListItem>
      <ListItem>Stability and recoverability</ListItem>
    </List>
  </Slide>
);

export const QRCode = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      https://cybernetic-entomology.micleners.com/
    </Heading>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScrc5-05gtAOZjP2Oxg3r4jQAViL7yaS_G3m6xnDB4BnVvTlw/viewform">
      <Image src={qr} height="600px" />
    </a>
  </Slide>
);

export const ImageSlide = ({ image, text, width }) => (
  <Slide transition={["zoom"]} bgColor="dark">
    {text ? <H2>Worked on my machine!</H2> : ""}
    <Image src={image} width={width} />
  </Slide>
);

export const TestPlanDictated = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Flex alignItems="center" justifyContent="space-around" mx="300px">
      <img src={bugSweep} width="300px" />
    </Flex>
    <H2>Easy!</H2>
    <H2>The test plan gets dictated from the top down</H2>
    <H2>¯\_(ツ)_/¯</H2>
  </Slide>
);

// TODO: Update outline
export const TestOutline = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <H1Norm>
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Talk Outline
      </Flex>
    </H1Norm>
    <List style={{ marginLeft: 250 }} textColor="text">
      <ListItem>Test Plan and Coordination</ListItem>
      <ListItem>Automated Tests</ListItem>
      <ListItem>Code Examples</ListItem>
      <ListItem>User Testing</ListItem>
      <ListItem>Non-Functional Requirements</ListItem>
    </List>
  </Slide>
);

export const TestPlanJustDoIt = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Flex alignItems="center" justifyContent="space-around" mx="300px">
      <img src={nike} width="300px" />
      <img src={bugSweep} width="300px" />
    </Flex>
    <H2>Have serious discussions on testing.</H2>
    <H2>Have a common consensus.</H2>
    <H2>Assess blind spots often.</H2>
  </Slide>
);

export const ConsiderationsOnTestPlans = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Considerations on test plans
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
        <AquaText>Data management</AquaText> for e2e, manual, and load testing
      </ListItem>
      <ListItem>
        <AquaText>Test case</AquaText> organization and record keeping
      </ListItem>
    </List>
  </Slide>
);

export const MoreOnTestPlans = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        More on test plans
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
);

export const TestPlanJustDoItReprise = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Flex alignItems="center" justifyContent="space-around" mx="300px">
      <img src={repeat} width="300px" />
      <img src={bugSweep} width="300px" />
    </Flex>
    <H2>Have the conversations.</H2>
    <H2>Document whats important to test.</H2>
    <H2>Revise and revisit the plan often.</H2>
  </Slide>
);

export const SeverityLevelRanking = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Use a Severity Level Ranking
      </Flex>
    </Heading>
    <Heading size={5} textColor="text">
      Label test cases and stories on severity:
    </Heading>
    <Text
      style={{ fontSize: 38 }}
      padding="0 80px"
      textColor="lightText"
      textAlign="left"
    >
      <ol>
        <li style={{ paddingBottom: 10 }}>
          Renders application or system inoperable. Widespread issue. Merits
          immediate attention.
        </li>
        <li style={{ paddingBottom: 10 }}>
          Causes significant impact to business functions. No workaround exists.
          Task makes it into workflow as soon as possible.
        </li>
        <li style={{ paddingBottom: 10 }}>
          Impacts functionality, but work-around exists or impact is accessible.
          Fixing issue can wait.
        </li>
        <li style={{ paddingBottom: 10 }}>
          The problem has low impact to business function. It may never get
          fixed.
        </li>
      </ol>
    </Text>
  </Slide>
);

export const WhatTestsDoWeAutomate = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <H1Norm>
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Automated Tests
      </Flex>
    </H1Norm>
    <List style={{ marginLeft: 450 }} textColor="text">
      <ListItem>Unit tests</ListItem>
      <ListItem>Integration tests</ListItem>
      <ListItem>API tests</ListItem>
      <ListItem>Acceptance tests</ListItem>
      <ListItem>End-to-end tests</ListItem>
    </List>
  </Slide>
);

export const FigmaSlide = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <H2>Testing levels</H2>
    <a href="https://www.figma.com/file/OxN58ihRfeVFoGwKNknNf3/Dev-Diagrams?node-id=0%3A1">
      <Image bgColor="lightText" src={testingLevels} height="600px" />
    </a>
  </Slide>
);

export const ThoughtsOnIntegrationTests = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Heading size={4} textColor="lightText">
      <Flex justifyContent="center" alignItems="center">
        <img src={bugSweep} width="200px" />
        Thoughts on Integration Tests
      </Flex>
    </Heading>
    <List style={{ marginLeft: 50 }} textColor="text">
      <ListItem>
        Can be done <AquaText>within unit testing</AquaText> framework
      </ListItem>
      <ListItem>
        <AquaText>API frameworks:</AquaText> Cucumber, Rest Assured, PostMan
      </ListItem>
      <ListItem>
        <AquaText>UI frameworks:</AquaText> Selenium, Cypress, Capybara
      </ListItem>
      <ListItem>
        Blog:{" "}
        <a href="https://www.toptal.com/java/unit-integration-junit-tests">
          <AquaText>Unit vs Integration Tests in Java</AquaText>
        </a>
      </ListItem>
      <ListItem>
        Blog:{" "}
        <a href="https://engineering.helpscout.com/testing-code-that-talks-to-the-database-7d15a5391fb9">
          <AquaText>Testing Code that Talks to the DB</AquaText>
        </a>
      </ListItem>
    </List>
  </Slide>
);

export const AutomatedEndToEndTests = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <H1Col1>Automated E2E Testing</H1Col1>
    <br />
    <H2>The gift that keeps on giving 🎁</H2>
    <br />
    <List style={{ marginLeft: 150 }} textColor="text">
      <ListItem>Catch more defects in development</ListItem>
      <ListItem>Tightens communication within team</ListItem>
      <ListItem>Serves as regression test suite</ListItem>
      <ListItem>
        See{" "}
        <a href="https://github.com/micleners/cypress-retro/">
          <AquaText>Talk on Cypress for more info</AquaText>
        </a>
      </ListItem>
    </List>
  </Slide>
);
