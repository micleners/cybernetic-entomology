import CodeSlide from "spectacle-code-slide";
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
} from "./helpers";
import {
  Title,
  Closing,
  HowToSquashBugs,
  Testing,
  RunTestsOftenAndEveryhere,
  TestsOutsideOfAutomation,
  InsideOrOutsideOfScope,
  GetUsersInFrontOfApplication,
  ConsiderationsOnUserTesting,
  NonFunctionalRequirements,
  QRCode,
  ImageSlide,
  TestPlanDictated,
  TestOutline,
  TestPlanJustDoIt,
  ConsiderationsOnTestPlans,
  MoreOnTestPlans,
  TestPlanJustDoItReprise,
  SeverityLevelRanking,
  WhatTestsDoWeAutomate,
  FigmaSlide,
  ThoughtsOnIntegrationTests,
  AboutMe,
  Bug,
  AutomatedEndToEndTests
} from "./slides";
import "./styles.css";
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
import { BugSlide } from "./components/slides";
import { Flex } from "rebass";

require("normalize.css");

const images = {
  bug: require("../assets/bug.svg").default,
  sweep_bug: require("../assets/sweep_bug.svg").default,
  twitter: require("../assets/twitter.png").default,
  unitIntegration: require("../assets/unit-v-integration.gif").default,
  doorGuardIntegration: require("../assets/door-gaurd-sync.gif").default,
  window: require("../assets/windows.gif").default,
  pyramid: require("../assets/test_pyramid.png").default,
  pyramid2: require("../assets/test_pyramid2.png").default,
  boxes: require("../assets/blackbox_whitebox.svg").default,
  nike: require("../assets/nike.png").default,
  repeat: require("../assets/repeat.svg").default,
  bugSeverity: require("../assets/minor_critical_bug.png").default,
  testingTiming: require("../assets/pipeline-cannot-fail.jpg").default,
  userTesting: require("../assets/no_user_would_ever_do_that.png").default,
  expandTesting: require("../assets/testing_progression_nuke.jpg").default,
  scope: require("../assets/prioritizing_scope_deadline.jpg").default,
  allBugsFound: require("../assets/all_bugs_found.png").default,
  rootCause: require("../assets/root_cause.jpeg").default,
  deathByBug: require("../assets/bugs_bring_you_down.png").default,
  testInProd: require("../assets/test_in_production.jpg").default,
  foundABug: require("../assets/found-a-bug.png").default,
  qr: require("../assets/qr.png").default
};

const theme = createTheme(themeColors, {
  primary: {
    name: "Oxygen Mono",
    googleFont: true,
    styles: ["400", "700i"]
  },
  secondary: {
    name: "Roboto Mono",
    googleFont: true,
    styles: ["400", "700i"]
  }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        contentWidth={1400}
        theme={theme}
        bgColor="dark"
      >
        <Title />
        <QRCode />
        <AboutMe />
        <BugSlide text="Why are tests important?" />

        <ImageSlide
          image={images.window}
          width="1000px"
          text="Worked on my machine!"
        />

        <TestOutline />

        <Slide transition={["zoom"]} bgColor="dark">
          <a href="https://www.monkeyuser.com/2018/zenos-progress/">
            <Image src={images.deathByBug} height="600px" />
          </a>
        </Slide>

        <Bug text="How does a team decide on the most important tests to maximize bug extermination?" />
        <TestPlanDictated />

        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.testInProd} height="600px" />
        </Slide>

        <TestPlanJustDoIt />
        <ConsiderationsOnTestPlans />

        <Slide transition={["zoom"]} bgColor="dark">
          <a href="https://www.monkeyuser.com/">
            <Image src={images.rootCause} height="600px" />
          </a>
        </Slide>

        <MoreOnTestPlans />
        <TestPlanJustDoItReprise />

        <Slide transition={["zoom"]} bgColor="dark">
          <a href="https://www.monkeyuser.com/2018/zenos-progress/">
            <Image src={images.foundABug} height="600px" />
          </a>
        </Slide>

        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>How do you designate test cases that are more important?</H2>
        </Slide>

        <SeverityLevelRanking />

        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.scope} height="700px" />
        </Slide>

        <InsideOrOutsideOfScope />
        {/* <Slide transition={["zoom"]} bgColor="dark">
          <Heading size={4} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              <img src={images.sweep_bug} width="200px" />
              Decide what is inside and outside of scope
            </Flex>
          </Heading>
          <List style={{ marginLeft: 50 }} textColor="text">
            <ListItem>
              <AquaText>In Scope Examples:</AquaText>
            </ListItem>
            <ListItem style={{ marginLeft: 50 }}>
              Code we write (modules, components, services)
            </ListItem>
            <ListItem style={{ marginLeft: 50 }}>
              Data management layers
            </ListItem>

            <ListItem>
              <AquaText>Out of Scope Examples:</AquaText>
            </ListItem>
            <ListItem style={{ marginLeft: 50 }}>
              Mobile or Tablet testing
            </ListItem>
            <ListItem style={{ marginLeft: 50 }}>
              3rd party API testing
            </ListItem>
            <ListItem style={{ marginLeft: 50 }}>
              Browsers: Only Chrome, not IE
            </ListItem>
          </List>
        </Slide> */}
        <BugSlide text="What tests do we automate?" />
        <WhatTestsDoWeAutomate />
        <FigmaSlide />

        <BugSlide
          text="What distinguished unit tests from integration tests?"
          size={4}
        />

        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.unitIntegration} width="1000px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="dark">
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

        <CodeSlide
          className="code"
          transition={[]}
          bgColor="dark"
          lang="js"
          textColor="text"
          code={require("raw-loader!../assets/unit.example").default}
          ranges={[
            { loc: [0, 9], title: "Unit Test Example" },
            { loc: [2, 9], title: "Creating Square Service" },
            { loc: [4, 5], title: "Method area takes length" },
            { loc: [6, 7], title: "Returns area" },
            { loc: [10, 11], title: "Testing Service" },
            { loc: [16, 26], title: "Setup" },
            { loc: [26, 34], title: "Testing Area Method" }
          ]}
        />

        <Slide transition={["zoom"]} bgColor="dark">
          <Heading size={2} textColor="lightText">
            <Flex justifyContent="center" alignItems="center">
              🤔 Important questions
            </Flex>
          </Heading>
          <List style={{ marginLeft: 250 }} textColor="text">
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

        <CodeSlide
          className="code"
          transition={[]}
          bgColor="dark"
          lang="js"
          textColor="text"
          code={require("raw-loader!../assets/unitMocking.java").default}
          ranges={[
            { loc: [0, 9], title: "Unit Test With Mocking" },
            { loc: [2, 9], title: "Adding Circle Service" },
            { loc: [10, 15], title: "Creating Enum Helper" },
            { loc: [16, 30], title: "Ceading Area Helper Service" },
            { loc: [23, 32], title: "calculateArea Method" },
            { loc: [31, 32], title: "Given shape and length" },
            { loc: [31, 55], title: "Uses Services & Returns area" },
            { loc: [52, 70], title: "Testing Helper Service" },
            { loc: [68, 70], title: "Mock dependency services" },
            { loc: [70, 73], title: "New Up Unit Tested Service" },
            { loc: [78, 82], title: "Returns area" }
          ]}
        />

        <Slide transition={["zoom"]} bgColor="dark">
          <Image
            src={images.boxes}
            bgColor="lightText"
            padding={50}
            height="700px"
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="dark">
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

        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>How much do your tests overlap?</H2>
        </Slide>

        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>
            How much <em>should</em> tests overlap?
          </H2>
        </Slide>

        <Slide transition={["zoom"]} bgColor="dark">
          <H2>Enough to prevent this</H2>
          <Image src={images.doorGuardIntegration} height="600px" />
        </Slide>

        <CodeSlide
          className="code"
          transition={[]}
          bgColor="dark"
          lang="js"
          textColor="text"
          code={require("raw-loader!../assets/api.java").default}
          ranges={[
            { loc: [0, 10], title: "API Test Example" },
            { loc: [3, 5], title: "When I call the API with data" },
            { loc: [5, 8], title: "Then I get the expected response" },
            { loc: [0, 14], title: "API Test Example" }
          ]}
        />

        <ThoughtsOnIntegrationTests />
        <AutomatedEndToEndTests />

        <Slide transition={["zoom"]} bgColor="dark">
          <H2 style={{ paddingBottom: 40 }}>Keep in mind the Test Pyramid</H2>
          <Image src={images.pyramid2} height="500px" />
        </Slide>

        <Bug text="When do you run tests in your process?" />

        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.testingTiming} height="600px" />
        </Slide>

        <RunTestsOftenAndEveryhere />

        <Bug text="What tests happen outside automation?" />
        <TestsOutsideOfAutomation />
        <Bug text="How do we communicate testing within our team or across teams?" />
        <InsideOrOutsideOfScope />
        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.userTesting} height="600px" />
        </Slide>

        <Bug text="What does user testing entail?" />
        <GetUsersInFrontOfApplication />
        <ConsiderationsOnUserTesting />
        <Bug text="How do we handle non-functional requirements?" />
        <NonFunctionalRequirements />
        <Slide transition={["zoom"]} bgColor="dark">
          <Image src={images.allBugsFound} height="600px" />
        </Slide>

        <QRCode />
        <Closing />
      </Deck>
    );
  }
}
