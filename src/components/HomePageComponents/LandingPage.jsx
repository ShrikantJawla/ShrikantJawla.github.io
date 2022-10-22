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
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const bgColor = '#fefffe'

const MotionBox = motion(Box)
const MotionButton = motion(Button)

function LandingPage() {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      justifyContent="center"
      alignItems="center"
      textAlign="left"
      bg={bgColor}
      p={{ base: '1', lg: '5' }}
      w="full"
      h="100vh"
      overflow="hidden"
      mt={{ base: '25px', md: 0 }}
      //   pt={{ lg: '90px' }}
    >
      <StyledStack direction={{ base: 'column', lg: 'row' }}>
        <VStack
          p={{ base: '2', md: '80px', lg: '60px' }}
          w={{ base: 'full', lg: '48%' }}
          h={{ base: '350px', md: '400px', lg: '430px' }}
        >
          <Text fontSize={17} w="full" id="first__row">
            <span id="hi__text">Hi,</span> My name is
          </Text>
          <Heading id="title" w="full">
            Shrikant Jawla
          </Heading>
          <Text fontSize={19} color="gray" w="full">
            I build things for the web.
          </Text>
          <HStack w="full">
            <a
              href="https://github.com/ShrikantJawla/ShrikantJawla.github.io/raw/main/Resume/Shrikant_Jawla_resume.pdf"
              download="Shrikant_Jawla_Resume"
            >
              <MotionButton
                style={{ marginTop: '20px' }}
                bg="#008080"
                color="white"
                w="100px"
                _hover={{ bg: '#0b8d8f' }}
                fontSize={18}
                fontWeight="bold"
              >
                Resume
              </MotionButton>
            </a>
          </HStack>
        </VStack>
        <HStack
          w={{ base: 'full', lg: '540px' }}
          h={{ base: '300px', lg: '400px' }}
          pos="relative"
          // overflow="hidden"
        >
          <Box
            pos="absolute"
            top="5"
            left={{ base: '-9%', md: '17%', lg: '0' }}
          >
            <HomePageLaptopImage />
          </Box>
          <Box
            position="absolute"
            top={{ base: '15%', lg: '30%' }}
            left={{ base: '54%', lg: '65%' }}
          >
            <HomePagePhoneImage />
          </Box>
          <MotionBox
            variants={scrollIconVariant}
            animate="visible"
            pos="absolute"
            right={{ base: '40%', md: '44%', lg: '26%' }}
            top={{ base: '30%', lg: '14%' }}
          >
            <CgScrollV size="35px" />
          </MotionBox>
          <MotionBox
            variants={scrollIconVariant}
            animate="visible"
            pos="absolute"
            right={{ base: '2%', md: '25%', lg: '0%' }}
            top="40%"
          >
            <CgScrollV size="35px" />
          </MotionBox>
        </HStack>
      </StyledStack>
    </Stack>
  )
}

export default LandingPage

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

const textBg = keyframes`
 0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
`

const StyledStack = styled(Stack)`
  /* border: 1px solid blue; */
  width: 1050px;
  @media screen and (max-width: 992px) {
    width: 96%;
    margin: auto;
  }
  #first__row {
    #hi__text {
      font-size: 35px;
      font-weight: bold;
      font-family: monospace;
    }
  }
  #title {
    font-size: 84px;
    letter-spacing: 1px;
    line-height: 1;
    font-weight: bold;
    color: yellow;
    /* border: 1px solid blue; */
    padding: 5px 0px;
    font-style: italic;
    background: linear-gradient(
      45deg,
      #e5fb42,
      #f40909,
      #097bf4,
      #e5fb42,
      #f40909,
      #097bf4,
      #e5fb42
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    animation-name: ${textBg};
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`
