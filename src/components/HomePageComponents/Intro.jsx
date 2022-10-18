import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import HomePageLaptopImage from './HomePageLaptopImage'
import HomePagePhoneImage from './HomePagePhoneImage'
import { CgScrollV } from 'react-icons/cg'
import { motion } from 'framer-motion'

const bgColor = '#fefffe'
const color1 = '#563727'
const color2 = '#372c2e'
const color3 = '#FFFFFF'
const color4 = '#de9e48'
const color5 = '#7a431d'
const color6 = '#f5f2f6'

const MotionBox = motion(Box)
const MotionButton = motion(Button)

function Intro() {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      justifyContent="center"
      alignItems="center"
      textAlign="left"
      bg={bgColor}
      p="5"
      w="full"
      h="100vh"
      spacing={5}
      mt={{ base: '25px', md: 0 }}
      pt={{ lg: '90px' }}
    >
      <VStack
        p={{ base: '2', md: '80px', lg: '60px' }}
        w={{ base: 'full', lg: '55%' }}
        h={{ base: '350px', md: '400px', lg: '430px' }}
      >
        <Text fontSize={16} w="full">
          I am a
        </Text>
        <Heading w="full" color="red">
          Full-Stack Developer
        </Heading>
        <Text fontSize={14} color="gray" w="full">
          Aspiring Software Developer equipped with problem-solving and
          user-centric attitude. Has a deep interest in IT and is capable of
          writing code in React, Redux, HTML, and CSS, on the front end, Node JS
          and Express Js on the backend. A team player and intensely interested
          in obtaining a software developer position to work on enhancing the
          product experience.
        </Text>
        <Box w="full">
          <MotionButton style={{ marginTop: '20px' }} bg={color4} w="100px">
            Resume
          </MotionButton>
        </Box>
      </VStack>
      <HStack
        w={{ base: 'full', lg: '45%' }}
        pos="relative"
        h={{ base: '300px', lg: '400px' }}
      >
        <Box
          pos="absolute"
          top="5"
          left={{ base: '-9%', md: '17%', lg: '-100' }}
        >
          <HomePageLaptopImage />
        </Box>
        <Box
          position="absolute"
          top={{ base: '15%', lg: '30%' }}
          left={{ base: '54%', lg: '40%' }}
        >
          <HomePagePhoneImage />
        </Box>
        <MotionBox
          variants={scrollIconVariant}
          animate="visible"
          pos="absolute"
          right={{ base: '40%', md: '44%', lg: '42%' }}
          top={{ base: '30%', lg: '12%' }}
        >
          <CgScrollV size="35px" />
        </MotionBox>
        <MotionBox
          variants={scrollIconVariant}
          animate="visible"
          pos="absolute"
          right={{ base: '0%', md: '25%', lg: '22%' }}
          top="38%"
        >
          <CgScrollV size="35px" />
        </MotionBox>
      </HStack>
    </Stack>
  )
}

export default Intro

const scrollIconVariant = {
  visible: {
    y: 35,
    transition: {
      duration: 1,
      delay: 0.4,
      yoyo: Infinity,
    },
  },
}
