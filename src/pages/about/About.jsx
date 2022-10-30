import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { motion as m } from 'framer-motion'
import {
  anmiaVariant,
  childVariant,
  mVariant,
  sVariant,
  uVariant,
  webVariant,
} from '../../components/homeTextAnimation'
import { StyledMotionDiv, Wrapper } from './about.styles'

const MText = m(Text)
const MBox = m(Box)

function About() {
  return (
    <Wrapper background="#1c1d1c" w="full" id="about__Page">
      <Box id="content">
        <Text id="background_Text">About me</Text>
        <MBox
          variants={anmiaVariant}
          initial="hidden"
          animate="visible"
          id="text_box"
        >
          <MText textOverflow="hidden" id="hi">
            <StyledMotionDiv variants={childVariant}>H</StyledMotionDiv>
            <StyledMotionDiv variants={childVariant}>i</StyledMotionDiv>
            <StyledMotionDiv variants={childVariant}>,</StyledMotionDiv>
          </MText>
          <MText id="shri">
            <StyledMotionDiv variants={childVariant}>I</StyledMotionDiv>
            <StyledMotionDiv variants={uVariant}>'</StyledMotionDiv>
            <StyledMotionDiv variants={mVariant}>m</StyledMotionDiv>{' '}
            <StyledMotionDiv>
              <StyledMotionDiv variants={sVariant}>S</StyledMotionDiv>
              <StyledMotionDiv variants={sVariant}>h</StyledMotionDiv>
              <StyledMotionDiv variants={sVariant}>r</StyledMotionDiv>
              <StyledMotionDiv variants={sVariant}>i</StyledMotionDiv>
              <StyledMotionDiv variants={sVariant}>k</StyledMotionDiv>
              <StyledMotionDiv variants={sVariant}>a</StyledMotionDiv>
              <StyledMotionDiv variants={sVariant}>n</StyledMotionDiv>
              <StyledMotionDiv variants={sVariant}>t</StyledMotionDiv>
            </StyledMotionDiv>
            <StyledMotionDiv variants={sVariant}>,</StyledMotionDiv>
          </MText>
          <MText variants={webVariant} id="web_developer">
            Web developer
          </MText>
          <Text id="developer">Full Stack web developer</Text>
          <Text id="about_text">
            Aspiring Software Developer equipped with problem-solving and
            user-centric attitude. Has a deep interest in IT and is capable of
            writing code in React, Redux, HTML, and CSS, on the front end, Node
            JS and Express Js on the backend. A team player and intensely
            interested in obtaining a software developer position to work on
            enhancing the product experience.
          </Text>
          <button id="resume_button">Resume</button>
        </MBox>
        <Box id="image_box">
          {/* <img
            alt="shrikant_photo"
            src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/photo_2022-07-08_16-49-45.jpg?raw=true"
          /> */}
        </Box>
      </Box>
    </Wrapper>
  )
}

export default About
