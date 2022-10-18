import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

function EmptyLaptopWithImage() {
  return (
    <Box
      w="410px"
      h="260px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="400px" h="250px" position="relative">
        <Image w="full" h="full" src="/images/mac-laptop-png-13.png" />
        <StyledBox
          pos="absolute"
          top="8.9%"
          left="13%"
          overflow="auto"
          w="293.5px"
          h="190px"
        >
          <Image
            w="full"
            src="/images/FireShot Capture 001 - Apple (India) - www.apple.com.png"
          />
        </StyledBox>
      </Box>
    </Box>
  )
}

export default EmptyLaptopWithImage


const StyledBox = styled(Box)`
  &::-webkit-scrollbar{
    display: none;
  }

`