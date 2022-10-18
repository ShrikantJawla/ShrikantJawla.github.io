import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

function EmptyPhone() {
  return (
    <Box
      w="250px"
      h="340px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="240px" h="330px" position="relative">
        <Image w="full" h="full" src="/images/mobile-hands-vector-png-2.png" />
        <StyledBox
          pos="absolute"
          top="4.3%"
          left="13.9%"
          overflow="auto"
          w="133px"
          h="243px"
          rounded="5"
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

export default EmptyPhone

const StyledBox = styled(Box)`
  &::-webkit-scrollbar {
    display: none;
  }
`
