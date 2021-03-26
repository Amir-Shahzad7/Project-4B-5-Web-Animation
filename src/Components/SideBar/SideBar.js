import React from "react";
import {
  SideBarComponents,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideButtonWrap,
  SideBarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, Toggle }) => {
  return (
    <SideBarComponents isOpen={isOpen} onClick={Toggle}>
      <Icon onClick={Toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink
            to="About"
            onClick={Toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SideBarLink>
          <SideBarLink
            to="Discover"
            onClick={Toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Discover
          </SideBarLink>
          <SideBarLink
            to="Services"
            onClick={Toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Services
          </SideBarLink>
          <SideBarLink
            to="SignUp"
            onClick={Toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Sign Up
          </SideBarLink>
        </SideBarMenu>
        <SideButtonWrap>
          <SideBarRoute to="/SignIn">Sign In</SideBarRoute>
        </SideButtonWrap>
      </SideBarWrapper>
    </SideBarComponents>
  );
};

export default SideBar;
