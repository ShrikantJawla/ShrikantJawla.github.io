import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import EmptyLaptopWithImage from './EmptyLaptopWithImage'
import EmptyPhone from './EmptyPhone'
import EmptyTablet from './EmptyTablet'
import FIrstFullPageAnimation from './FIrstFullPageAnimation'
import Navbar from './Navbar'

const bgColor = '#fefffe'
const footerColor = '#f4f5f6'
const secondbgColor = '#f4f5f6'

function HomePage() {
  return (
    <VStack>
      <Navbar />
      <FIrstFullPageAnimation />
    </VStack>
  )
}

export default HomePage
