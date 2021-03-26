import React from "react";
import { Button } from "../Button/ButtonElement";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
import {
  InfoComponents,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ButtonWrap,
  Image,
  ImageWrap,
} from "./InfoElements";

const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  heading,
  darkText,
  description,
  buttonLable,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoComponents id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <Flip top>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{heading}</Heading>
                  <SubTitle darkText={darkText}>{description}</SubTitle>
                  <ButtonWrap>
                    <Button
                      to="/"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLable}
                    </Button>
                  </ButtonWrap>
                </TextWrapper>
              </Flip>
            </Column1>
            <Column2>
              <Rotate top left>
                <ImageWrap>
                  <Image src={img} alt={alt} />
                </ImageWrap>
              </Rotate>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoComponents>
    </>
  );
};

export default Info;
