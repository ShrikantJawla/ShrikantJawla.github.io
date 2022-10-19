import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

function HomePagePhoneImage() {
  return (
    <Box
      w={{ base: '220px', lg: '250px' }}
      h={{ base: '290px', lg: '340px' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="240px" h={{ base: '280px', lg: '330px' }} position="relative">
        <Image w="full" h="full" src="/images/mobile-hands-vector-png-2.png" />
        <StyledBox
          pos="absolute"
          top="4.3%"
          left="13.9%"
          overflow="auto"
          w={{ base: '123px', lg: '133px' }}
          h={{ base: '207px', lg: '243px' }}
          rounded="5"
        >
          <Image
            w="full"
            src="https://github.com/ShrikantJawla/ShrikantJawla.github.io/blob/main/public/images/SurveyMonkeySmallScreen.png?raw=true"
          />
        </StyledBox>
      </Box>
    </Box>
  )
}

export default HomePagePhoneImage

const StyledBox = styled(Box)`
  &::-webkit-scrollbar {
    display: none;
  }
`
