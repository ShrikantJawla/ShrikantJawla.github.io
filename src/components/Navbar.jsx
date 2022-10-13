import { Avatar, Box, HStack, Spacer, Text } from '@chakra-ui/react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import React from 'react'
import { IoMdMenu } from 'react-icons/io'

const MotionBox = motion(Box)

function Navbar() {
  return (
    <MotionBox
      bg="#303032"
      h="70px"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="99999"
      display="flex"
      alignItems="center"
      px="19px"
      variants={NavVariant}
      initial="hidden"
      animate="visible"
    >
      <HStack spacing={3}>
        <Avatar src="/images/photo_2022-07-08_16-49-45.jpg" size="sm" />
        <Text fontFamily="Oswald" fontSize={21} color="#d6d6d6">
          Shrikant Jawla
        </Text>
      </HStack>
      <Spacer />
      <HStack display={{ base: 'none', lg: 'flex' }} spacing={5}>
        <MyText>ABOUT</MyText>
        <MyText>SKILLS</MyText>
        <MyText>PROJECTS</MyText>
        <MyText>CONTACT-ME</MyText>
      </HStack>
      <StyledMenu />
    </MotionBox>
  )
}

export default Navbar

const MyText = styled.p`
  /* font-weight: bold; */
  padding: 6px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.4s ease-in-out;
  color: #d6d6d6;
  &:hover {
    background-color: black;
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
      delay: 0.3,
      duration: 0.5,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 120,
    },
  },
}
