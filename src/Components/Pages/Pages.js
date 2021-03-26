import React, { useState } from "react";
import { Info, MainSection, NavBar, Services, SideBar } from "..";
import Footer from "../Footer/Footer";
import { HomeObjOne, HomeObjThree, HomeObjTwo } from "../Information/Data";

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} Toggle={Toggle} />
      <NavBar Toggle={Toggle} />
      <MainSection />
      <Info {...HomeObjOne} />
      <Info {...HomeObjTwo} />
      <Services />
      <Info {...HomeObjThree} />
      <Footer />
    </>
  );
};

export default Pages;
