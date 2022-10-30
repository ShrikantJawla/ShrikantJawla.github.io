import { Box, Image } from '@chakra-ui/react'
import styled from 'styled-components'
import React, { useState } from 'react'

function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
      <StyledBox
        w="22px"
        h="70vh"
        borderRadius="20px"
        openSidebar={openSidebar}
        position="fixed"
        top="15%"
        fontSize={30}
        backgroundColor="#402f2f"
        color="white"
        zIndex={22}
        onClick={() => setOpenSidebar(!openSidebar)}
        cursor="pointer"
        // _hover={{ background: '#402f2f', cursor: 'pointer' }}
      >
        <Box id="handle"></Box>
      </StyledBox>
      {openSidebar && (
        <Wrapper openSidebar={openSidebar}>
          <Box id="top_logo">
            <Image src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/SJPng.png?raw=true" />
          </Box>
          <a href="#about__Page">
            <Box id="about">About</Box>
          </a>
          <a href="#skills__Page">
            <Box id="about">Skills</Box>
          </a>
          <a href="#projects__Page">
            <Box id="about">Projects</Box>
          </a>
          <a href="#contact__Page">
            <Box id="about">Contacts</Box>
          </a>
          <Box id="resume">Downoad CV</Box>
        </Wrapper>
      )}
    </>
  )
}

export default Sidebar

const StyledBox = styled(Box)`
  /* transition: all 0.5s ease-in-out; */
  display: flex;
  flex-direction: column;
  align-items: flex-flex-start;
  justify-content: center;
  z-index: 40;
  left: ${({ openSidebar }) => (openSidebar ? `130px` : `0`)};
  #handle {
    width: 45px;
    background-color: #402f2f;
    height: 64px;
    border-radius: 15px;
    z-index: 1;
    @media screen and (max-width: 767px) {
      width: 30px;
    }
  }
`

const Wrapper = styled(Box)`
  z-index: 3;
  position: fixed;
  width: 130px;
  left: 0px;
  top: 0px;
  bottom: 0;
  background: #161616;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  transform: ${({ openSidebar }) =>
    openSidebar ? 'translateX(0)' : 'translateX(-150px)'};

  #top_logo {
    width: 130px;
    height: 148px;
    background: #0b0b0b;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 92px;
      height: 93px;
      transition: all 0.5s ease-in-out;
      &:hover {
        scale: 1.09;
      }
    }
  }
  #about {
    width: 130px;
    height: 51px;
    border-width: 0.5px 0px;
    border-style: solid;
    border-color: rgba(129, 129, 129, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #cfcccc;
    &:hover {
      background: linear-gradient(0deg, #313031, #343238),
        linear-gradient(
          0deg,
          rgba(163, 163, 163, 0.66),
          rgba(163, 163, 163, 0.66)
        );
      cursor: pointer;
    }
  }
  #resume {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, #2d2d2f, #454446),
      linear-gradient(
        0deg,
        rgba(163, 163, 163, 0.66),
        rgba(163, 163, 163, 0.66)
      );
    width: 130px;
    height: 53px;
    border-width: 0.5px 0px;
    border-style: solid;
    border-color: rgba(163, 163, 163, 0.66);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 87px;
    /* or 544% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.06em;
    color: #c6c4c4;
    &:hover {
      cursor: pointer;
      background: linear-gradient(0deg, #434345, #636364),
        linear-gradient(
          0deg,
          rgba(129, 128, 128, 0.66),
          rgba(163, 163, 163, 0.66)
        );
    }
  }
`
