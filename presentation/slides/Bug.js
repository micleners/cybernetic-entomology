import React from "react";
import { Slide, Image } from "spectacle";
import { H2 } from "../helpers";

const bug = require("../../assets/bug.svg").default

export const Bug = ({ text }) => (
  <Slide transition={["zoom"]} bgColor="dark">
    <Image src={bug} width="300px" />
    <H2>{text}</H2>
  </Slide>
);

