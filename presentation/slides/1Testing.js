import React from 'react';
import {
  themeColors,
  H1Norm,
  H1Col1,
  H2,
  FlexRowCenter,
  ListItemIndent
} from '../helpers';
import '../styles.css';
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
} from 'spectacle';

const images = {
  bug: require('../../assets/bug.svg').default,
  sweep_bug: require('../../assets/sweep_bug.svg').default,
  twitter: require('../../assets/twitter.png').default
};

export const Testing = () => (
  <Slide transition={['zoom']} bgColor="dark">
    <Image src={images.sweep_bug} width="300px" />
    <H2>How can we minimize bugs in our software?</H2>
  </Slide>
);
