import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Spin from "react-reveal/Spin";
import Icon1 from "../Images/IMG1.svg";
import Icon2 from "../Images/IMG2.svg";
import Icon3 from "../Images/IMG3.svg";
import {
  ServicesComponents,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesComponents id="Services">
      <LightSpeed left>
        <ServicesH1>Our Services</ServicesH1>
      </LightSpeed>
      <ServicesWrapper>
        <Spin>
          <ServicesCard>
            <ServicesIcon src={Icon1} alt="Car" />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and worries and increase overall revenu.
            </ServicesP>
          </ServicesCard>
        </Spin>
        <Spin>
          <ServicesCard>
            <ServicesIcon src={Icon2} alt="Paper" />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              You can access any of our platform from anywhere in the world.
            </ServicesP>
          </ServicesCard>
        </Spin>
        <Spin>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="Charts" />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock your special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
        </Spin>
      </ServicesWrapper>
    </ServicesComponents>
  );
};

export default Services;
