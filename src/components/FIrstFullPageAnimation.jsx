import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const MotionDiv = motion(Box)
const MotionImage = motion(Image)
const MotionButton = motion(Button)
const MotionStack = motion(Stack)

function FIrstFullPageAnimation() {
  const [isHide, setIsHide] = React.useState(true)
  return (
    <AnimatePresence mode="wait">
      {isHide && (
        <MotionDiv
          key="adfjadfadfkj"
          zIndex={99999999}
          bgGradient="linear(to-r, #242313 , #070602)"
          w="full"
          h="115vh"
          variants={containerVariant}
          initial="hide"
          animate="visible"
          exit="exit"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="fixed"
          top="0"
          overflowX='hidden'
        >
          <Box
            
            w={{base:'full',lg:"78%"}}
            h="80vh"
            p="20px"
            mt={{base:'-100px',lg:'0'}}
          >
            <MotionStack direction={{ base: 'column', lg: 'row' }}  spacing={{base:'30',lg:0}} >
              <Box w={{base:'full',lg:"45%"}} pos='relative' >
                <Heading fontSize={{base:54,'2xl':60}} color="white">Hi,</Heading>
                <Text color="white" fontSize={{base:"30px",'2xl':40}}>
                  My name is <StyledSpan>Shrikant.</StyledSpan>
                </Text>
                <Text fontSize={{base:"25px",'2xl':38}} color="white">
                  I build things for the web.
                </Text>
                <MotionButton
                  pos="absolute"
                  top={{base:"112%",lg:'60%','2xl':'40%'}}
                  left="5%"
                  w="130px"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="visible"
                  bg="#d9c5b2"
                  fontSize={19}
                  fontWeight="bold"
                  zIndex='2'
                  onClick={() => {setIsHide(false)}}
                >
                  HOME
                </MotionButton>
              </Box>
              <MotionDiv
                pos="relative"
                variants={ImageBoxVariant}
                initial="hidden"
                animate="visible"
                h="70vh"
                w={{ base: 'full', lg: "60%", xl: '60%', '2xl': '40%' }}
              >
                <MotionImage
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  variants={itemA}
                  border="1px solid grey"
                  pos="absolute"
                  left={{base:'10%',md:'30%',lg:"35%"}}
                  top="22%"
                  w={{base:'240px',md:"280px"}}
                  h={{base:'220px',md:"260px"}}
                  src="/images/tesla.png"
                  zIndex="1"
                  whileHover={{ scale: 1.1, cursor: 'pointer', zIndex: 2 }}
                  transition={{ duration: 0.5 }}
                />
                <MotionImage
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  variants={itemB}
                  border="1px solid grey"
                  pos="absolute"
                  w="200px"
                  h="150px"
                  top="28%"
                  right={{base:'-9%',md:'15%',lg:"-25"}}
                  src="/images/sm1.png"
                  zIndex="1"
                  whileHover={{ scale: 1.1, cursor: 'pointer' }}
                  transition={{ duration: 0.5 }}
                />
                <MotionImage
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  variants={itemC}
                  border="1px solid grey"
                  pos="absolute"
                  w="200px"
                  top={{base:'50%',lg:"57%"}}
                  left={{base:'-7%',md:'15%',lg:"12"}}
                  h="150px"
                  src="/images/sm2.png"
                  zIndex="1"
                  whileHover={{ scale: 1.1, cursor: 'pointer' }}
                  transition={{ duration: 0.5 }}
                />
                <MotionImage
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  variants={itemD}
                  whileHover={{ scale: 1.1, cursor: 'pointer', zIndex: 1 }}
                  transition={{ duration: 0.5 }}
                  border="1px solid grey"
                  pos="absolute"
                  w="200px"
                  top="13%"
                  left={{base:'-7%',md:'13%',lg:"10"}}
                  h="150px"
                  src="/images/sm3.png"
                />
              </MotionDiv>
            </MotionStack>
          </Box>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

export default FIrstFullPageAnimation

const containerVariant = {
  hide: {
    y: '-100vh',
  },
  visible: {
    y: '0',
    // borderRadius: '2%',
    // display: 'none',
    transition: {
      delay: 0.1,
      duration: 1,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 120,
    },
  },
  exit: {
    y: '-100vw',
    // display: 'none',
    transition: {
      duration: 1,
      delay: 0.2,
      opacity: 0,
    },
  },
}

const StyledSpan = styled.span`
  font-size: 37px;
  font-weight: 600;
  color: #fc1c1c;
`

const ImageBoxVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.4,
      staggerChildren: 0.9,
      delayChildren: 1,
    },
  },
}

const itemA = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
}
const itemB = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
}
const itemC = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
}
const itemD = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
}

const buttonVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: [1, 1.1, 1.2, 1.2, 1.1, 1],
    borderRadius: [0, 10, 15, 10, 0],
    opacity: 1,
    transition: {
      delay: 5,
      duration: 0.5,
      scale: {
        yoyo: Infinity,
        duration: 1,
      },
      borderRadius: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  },
}
