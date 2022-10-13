import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

function EmptyTablet() {
  return (
    <Box
      w="320px"
      h="240px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="310px" h="230px" position="relative">
        <Image w="full" h="full" src="/images/tablet-png-1.png" />
        <StyledBox
          pos="absolute"
          top="8.9%"
          left="5.7%"
          overflow="auto"
          w="275px"
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

export default EmptyTablet


const StyledBox = styled(Box)`
  &::-webkit-scrollbar{
    display: none;
  }

`