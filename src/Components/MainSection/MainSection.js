import React, { useState } from "react";
import Video from "../Video/Video.mp4";
import { Button } from "../Button/ButtonElement";
import Zoom from "react-reveal/Zoom";
import Spin from "react-reveal/Spin";
import {
  Main,
  MainBackground,
  VideoBackground,
  MainContent,
  MainH1,
  MainP,
  MainButtonWrapper,
  ArrowForward,
  ArrowRight,
} from "./MainSectionElements";

const MainSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Main id="/">
      <MainBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </MainBackground>
      <MainContent>
        <Zoom left>
          <MainH1>Virtual Banking Made Easy</MainH1>
        </Zoom>
        <Zoom right>
          <MainP>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </MainP>
        </Zoom>
        <MainButtonWrapper>
          <Spin>
          <Button
            to="SignUp"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          </Spin>
        </MainButtonWrapper>
      </MainContent>
    </Main>
  );
};

export default MainSection;
