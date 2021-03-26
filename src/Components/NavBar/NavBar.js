import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as Scroll } from "react-scroll";
import LightSpeed from "react-reveal/LightSpeed";
import {
  Nav,
  NavComponents,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  ButtonLink,
} from "./NavElements";

const NavBar = ({ Toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    Scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavComponents>
          <NavLogo to="/" onClick={toggleHome}>
            dolla
          </NavLogo>
          <MobileIcon onClick={Toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <LightSpeed left>
              <NavItem>
                <NavLinks
                  to="About"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="SignUp"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </LightSpeed>
          </NavMenu>
          <NavButton>
            <ButtonLink to="/SignIn">Sign In</ButtonLink>
          </NavButton>
        </NavComponents>
      </Nav>
    </>
  );
};

export default NavBar;
