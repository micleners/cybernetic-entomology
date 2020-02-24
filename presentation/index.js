import CodeSlide from 'spectacle-code-slide';
import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {
  themeColors,
  H1Norm,
  H1Col1,
  H2,
  FlexRowCenter,
  ListItemIndent
} from './helpers';
import { Title, Closing, HowToSquashBugs, Testing } from './slides';
import './styles.css';
import { Deck } from 'spectacle';

require('normalize.css');

const images = {
  bug: require('../assets/bug.svg').default,
  sweep_bug: require('../assets/sweep_bug.svg').default,
  twitter: require('../assets/twitter.png').default
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
        <Slide transition={['zoom']} bgColor="dark">
          <Image src={images.bug} width="300px" />
          <H2>How do we minimize bugs in our software?</H2>
        </Slide>
        <Testing />
        <Closing />
      </Deck>
    );
  }
}
