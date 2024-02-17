
import React from "react";
import AboutMeHome from '../aboutme/AboutMeHome';
import Projects from '../projects/Projects';
import SkillList from './SkillList';
import SubHeading from './SubHeading';
import Achievements from '../achievements/Achievements';
import Resume from '../resume/Resume';
import Intro from '../intro/Intro';

import { Animator, Fade, FadeIn, MoveOut, ScrollContainer, ScrollPage, StickyIn, Zoom, ZoomIn, batch } from 'react-scroll-motion';
const Homes = () => {

  const zoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <ScrollContainer> 
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), MoveOut())}>
          <Intro />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={Zoom(0.5)}>
          
        <SubHeading heading="INTERESTS" />
          <AboutMeHome />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={zoomInScrollOut}>
          <SubHeading heading="SKILLS" />
          <SkillList />
        </Animator>
      </ScrollPage>
      
          <SubHeading heading="PROJECTS" />
          <Projects />
      <SubHeading heading="ACHIEVEMENTS" />
      <Achievements />
      <SubHeading heading="RESUME" />
      <Resume />
    </ScrollContainer>

  );
};

export default Homes;