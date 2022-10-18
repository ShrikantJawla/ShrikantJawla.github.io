import { Box, HStack, Spacer, Text } from '@chakra-ui/react'
import styled from 'styled-components'
import { motion, useTransform } from 'framer-motion'
import React from 'react'
import { IoMdMenu, IoIosCodeWorking } from 'react-icons/io'
import { AiFillHome, AiFillProject } from 'react-icons/ai'
import { IoCall } from 'react-icons/io5'
import { useScroll } from 'framer-motion'
import ConnectLinks from './HomePageComponents/ConnectLinks'

const MotionBox = motion(Box)
const MotionHStack = motion(HStack)

function Navbar() {
  const { scrollY } = useScroll()
  const [hoverColor, setHoverColor] = React.useState(true)
  const newBg = useTransform(
    scrollY,
    [0, 100, 200],
    ['transparent', 'transparent', '#303032'],
  )
  const newfontcolor = useTransform(
    scrollY,
    [0, 100, 200],
    ['black', 'black', '#d6d6d6'],
  )

  scrollY.onChange((ele) => {
    if (ele >= 200) setHoverColor(false)
    else setHoverColor(true)
  })

  return (
    <MotionBox
      // bg="#303032"
      style={{ backgroundColor: newBg, color: newfontcolor }}
      h="70px"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="99999"
      display="flex"
      alignItems="center"
      px="23px"
      variants={NavVariant}
      initial="hidden"
      animate="visible"
    >
      <NameStyledStack spacing={3} pl={{base:'1',lg:"10"}}>
        <Text fontFamily="Oswald" fontSize={25}>
          Shrikant Jawla
        </Text>
      </NameStyledStack>
      <Spacer />
      <HStack display={{ base: 'none', lg: 'flex' }} spacing={5}>
        <StyledHStack spacing={1} hoverColor={hoverColor}>
          <AiFillHome />
          <MyText>ABOUT</MyText>
        </StyledHStack>
        <StyledHStack spacing={1} hoverColor={hoverColor}>
          <IoIosCodeWorking size="20px" />
          <MyText>SKILLS</MyText>
        </StyledHStack>
        <StyledHStack spacing={1} hoverColor={hoverColor}>
          <AiFillProject />
          <MyText>PROJECTS</MyText>
        </StyledHStack>
        <StyledHStack spacing={1} hoverColor={hoverColor}>
          <IoCall />
          <MyText>CONTACT</MyText>
        </StyledHStack>
      </HStack>
      <StyledMenu />
    </MotionBox>
  )
}

export default Navbar

const MyText = styled(motion.p)`
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  transition: all 0.4s ease-in-out;
  &:hover {
    /* background-color: black; */
    cursor: pointer;
    scale: 1.05;
  }
`
const NameStyledStack = styled(MotionHStack)`
  transition: all 0.4s ease-in-out;
`

const StyledHStack = styled(HStack)`
  padding: 0px 4px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: ${({ hoverColor }) =>
      hoverColor ? 'transparent' : 'black'};
    cursor: pointer;
    scale: 1.05;
  }
`

const StyledMenu = styled(IoMdMenu)`
  font-size: 20px;
  transition: all 0.4s ease-in-out;
  color: #d6d6d6;
  &:hover {
    background-color: black;
    cursor: pointer;
    scale: 1.05;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`

const NavVariant = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      delay: 1.8,
      duration: 0.5,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 120,
    },
  },
}
