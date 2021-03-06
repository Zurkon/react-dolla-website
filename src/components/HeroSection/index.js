import React, { useState } from 'react';

import backgroundVideo from '../../assets/video.mp4';

import { Button } from '../Button';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './styles';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={backgroundVideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Backing Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' primary darkButtonText onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;