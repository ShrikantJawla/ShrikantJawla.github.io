import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

function HomePageLaptopImage() {
  return (
    <Box
      w={{base:'360px',lg:"460px"}}
      h="280px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w={{base:'350px',lg:"450px"}} h={{base:'200px',lg:"270px"}} position="relative">
        <Image w="full" h="full" src="/images/mac-laptop-png-13.png" />
        <StyledBox
          pos="absolute"
          top="8.9%"
          left="13%"
          overflow="auto"
          w={{base:'257px',lg:"330px"}}
          h={{base:'152px',lg:"210px"}}
        >
          <Image
            w="full"
            src="https://github.com/ShrikantJawla/ShrikantJawla.github.io/blob/main/public/images/surveyMonkeyHomeFullScreenhot.png?raw=true"
          />
        </StyledBox>
      </Box>
    </Box>
  )
}

export default HomePageLaptopImage


const StyledBox = styled(Box)`
  &::-webkit-scrollbar{
    display: none;
  }

`