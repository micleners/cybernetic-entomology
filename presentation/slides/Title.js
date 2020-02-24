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

const images = {
  bug: require("../../assets/bug.svg").default,
  sweep_bug: require("../../assets/sweep_bug.svg").default,
  twitter: require("../../assets/twitter.png").default
};

export const Title = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <H1Norm>
      <span style={{ color: themeColors.yellow }}>Cypress</span> for E2E
      Testing:
    </H1Norm>
    <Heading size={3} lineHeight={1.1} textColor="text">
      A Retrospective
    </Heading>
    <br />
    <br />
    <br />
    <FlexRowCenter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }}
      >
        <Heading size={4} caps lineHeight={1} textColor="lightText">
          Michael Leners
        </Heading>
        <Heading size={6} lineHeight={1} textColor="lightText">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <img
              src={images.twitter}
              style={{ marginRight: 15 }}
              width="50px"
            />
            <img
              src={images.bug}
              style={{ marginRight: 15 }}
              width="50px"
            />            <img
              src={images.sweep_bug}
              style={{ marginRight: 15 }}
              width="50px"
            />
            micLeners
          </div>
        </Heading>
      </div>
    </FlexRowCenter>
    <br />
    <br />
    <br />
    <Heading size={5} caps lineHeight={1} textColor="text">
      February 12, 2020
    </Heading>
  </Slide>
);
