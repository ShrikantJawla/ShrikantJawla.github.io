import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionDiv = motion(Box)

function FIrstFullPageAnimation() {
  return (
    <MotionDiv
      zIndex={99999999}
      bgGradient="linear(to-r, #ff512f , #dd2476)"
      w="full"
      h="120vh"
      variants={containerVariant}
      initial="hide"
      animate="visible"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top="-100"
    >
      <Heading color="white">Hi Welcome!</Heading>
    </MotionDiv>
  )
}

export default FIrstFullPageAnimation

const containerVariant = {
  hide: {
    y: 0,
  },
  visible: {
    y: '-100vh',
    borderRadius: '10%',
    display: 'none',
    transition: {
      delay: 1,
      duration: 1,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 40,
      display: {
        delay: 2,
      },
    },
  },
}
