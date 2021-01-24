import React from 'react';

import { Button } from '../Button';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './styles';

const InfoSection = ({ lightBg, id, imgStart, topLine, headline, description, lightText, buttonLabel, darkButtonText, primary, img, alt }) => {
  return (
    <React.Fragment>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <Subtitle lightText={lightText}>
                  {description}
                </Subtitle>
                <BtnWrap>
                  <Button to="home" smooth duration={500} spy exact="true" offset={-80} primary={primary} darkButtonText={darkButtonText}>
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </React.Fragment>
  );
};

export default InfoSection;