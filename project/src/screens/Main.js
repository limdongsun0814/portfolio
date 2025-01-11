import React from "react";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import { Tooltip } from "react-tooltip";

const Main = () => {
  return (
    <main>
      <Hero />
      <Project />
      <Skill />
      <Contact />
      <Tooltip id="tooltip" />
    </main>
  );
};

export default Main;
