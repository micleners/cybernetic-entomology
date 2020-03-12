import React from "react";
import {
  themeColors,
  H1Norm,
  H1Col1,
  H2,
  FlexRowCenter,
  ListItemIndent
} from "../helpers";
import "../styles.css";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Link
} from "spectacle";
import { Flex } from "rebass";

const images = {
  bug: require("../../assets/bug.svg").default,
  sweep_bug: require("../../assets/sweep_bug.svg").default,
  github: require("../../assets/Github.svg").default,
  twitter: require("../../assets/twitter.png").default
};

export const Closing = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Flex alignItems="center" justifyContent="center">
      <img src={images.bug} style={{ margin: 15 }} width="100px" />
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading size={4} lineHeight={1.1} textColor="lightText">
          Cybernetic Entomology:
          <br />
          There's always one more bug
        </Heading>
        <br />
        <Heading size={3}>
          <span
            style={{ color: themeColors.yellow, textTransform: "uppercase" }}
          >
            Questions or Comments?
          </span>
        </Heading>
      </Flex>
      <img src={images.sweep_bug} style={{ margin: 15 }} width="100px" />
    </Flex>
    <br />
    <br />
    <Text size={5} lineHeight={1} textColor="text">
      <strong>This Presentation:</strong> cybernetic-entomology.micleners.com
    </Text>
    <br />

    <Text size={5} lineHeight={1} textColor="text">
      <strong>Repo:</strong> github.com/micleners/cybernetic-entomology
    </Text>
    <br />

    <Text size={5} lineHeight={1} textColor="text">
      <strong>Cypress Repo:</strong> github.com/micleners/cypress-retro
    </Text>

    <Flex
      py={5}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading size={4} caps lineHeight={1} textColor="text">
        Michael Leners
      </Heading>
      <Flex alignItems="center" justifyContent="center">
        <img
          src={images.twitter}
          style={{ margin: "0 15px" }}
          width="70px"
          height="auto"
        />
        <Heading size={6} lineHeight={1} textColor="text">
          micLeners
        </Heading>
        <img src={images.github} style={{ margin: "0 15px" }} width="70px" />
      </Flex>
    </Flex>
  </Slide>
);
