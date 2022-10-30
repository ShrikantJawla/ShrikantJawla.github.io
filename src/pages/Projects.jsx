import styled from 'styled-components'
import React from 'react'
import ProjectSection1 from '../components/ProjectSection1'
import ProjectSection2 from '../components/ProjectSection2'
import projects from '../DataBase/projects.json'

function Projects() {
  return (
    <Wrapper id="projects__Page">
      <p id="background_Text">My Works</p>
      <ProjectSection1 project1={projects[0]} project2={projects[1]} />
      <ProjectSection2 project1={projects[3]} project2={projects[2]} />
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.div`
  overflow-x: hidden;
  /* padding-left: 150px; */
  padding-top: 200px;
  width: 100%;
  height: fit-content;
  position: relative;
  background: #1c1d1c;
  @media screen and (max-width: 1090px) {
    padding: 170px 20px;
  }
  @media screen and (max-width: 767px) {
  }
  #background_Text {
    position: absolute;
    top: 0;
    right: -65px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 190px;
    line-height: 230px;
    color: rgba(143, 140, 140, 0.059);
    text-shadow: 0px 4px 4px rgba(59, 59, 59, 0.048);
    @media screen and (max-width: 1024px) {
      left: 13%;
      top: 0%;
      font-size: 110px;
      line-height: 130px;
    }
    @media screen and (max-width: 767px) {
      width: 471px;
      height: 80px;
      left: 60px;
      top: 0;
      font-size: 100px;
      line-height: 61px;
    }
  }
`
