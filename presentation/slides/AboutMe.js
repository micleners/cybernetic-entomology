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
import { Flex } from 'rebass';

const images = {
  me: require('../../assets/outdoor_gym_michael.jpg').default
};

const AboutList = ({ children }) => (
  <Heading
    size={6}
    lineHeight={1.1}
    style={{ textAlign: 'left', marginLeft: '50' }}
    textColor="text"
  >
    {children}
  </Heading>
);
export const AboutMe = () => (
  <Slide transition={['zoom']} bgColor="dark">
    <Flex alignItems="center" justifyContent="center">
      <img src={images.me} style={{ margin: 15, height: '500px' }} />
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Heading
          size={4}
          textColor="text"
          style={{ textAlign: 'left', marginLeft: '50' }}
        >
          <span
            style={{
              fontSize: '3rem',
              color: themeColors.yellow,
              textTransform: 'uppercase'
            }}
          >
            About Me
          </span>
        </Heading>
        <AboutList>
          Michael Leners{' '}
          <span style={{ color: themeColors.aqua }}>@micLeners</span>
        </AboutList>
        <AboutList>
          Former{' '}
          <span style={{ color: themeColors.aqua }}>science educator</span>
        </AboutList>
        <AboutList>
          Developer at{' '}
          <span style={{ color: themeColors.aqua }}>Fuse (Cardinal Health)</span>
        </AboutList>
        <AboutList>
          👀👌 <span style={{ color: themeColors.aqua }}>UX for devs</span> and{' '}
          <span style={{ color: themeColors.aqua }}>users</span>
        </AboutList>
        <AboutList>
          😍 <span style={{ color: themeColors.aqua }}>coding</span>,{' '}
          <span style={{ color: themeColors.aqua }}>games</span>, and{' '}
          <span style={{ color: themeColors.aqua }}>crafts</span>
        </AboutList>
      </Flex>
    </Flex>
  </Slide>
);
