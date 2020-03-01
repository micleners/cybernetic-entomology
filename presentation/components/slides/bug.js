import React from 'react';
import {
  themeColors,
  H1Norm,
  H1Col1,
  H2,
  FlexRowCenter,
  ListItemIndent
} from '../../helpers';
import {
  Heading,
  Image,
  Quote,
  Slide,
  Text,
  Link
} from 'spectacle';
import { Flex } from 'rebass';

require('normalize.css');

const images = {
  bug: require('../../../assets/bug.svg').default,
  sweep_bug: require('../../../assets/sweep_bug.svg').default
};

export const BugSlide = props => (
  <Slide transition={['zoom']} bgColor="dark">
    <Image src={images.bug} width="300px" />
    <Heading
      size={3}
      lineHeight={1.1}
      textColor="lightText"
      {...props}
    >
      {props.text}
    </Heading>
  </Slide>
);
