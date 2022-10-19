import { Box } from '@chakra-ui/react'
import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import styled from 'styled-components'

function ConnectLinks({ linksDir, linksposition }) {
  return (
    <StyledBox
      display="flex"
      gap={3}
      position="fixed"
      style={{
        flexDirection: linksDir.position,
        top: linksposition.top,
        left: linksposition.left,
      }}
      alignItems="center"
      justifyContent="center"
    >
      <AiFillGithub id="github" />
      <AiFillLinkedin id="linkedIn" />
      <SiLeetcode id="leetCode" />
    </StyledBox>
  )
}

export default ConnectLinks

const StyledBox = styled(Box)`
  z-index: 100000;
  transition: all 0.7s ease-in-out;
  #github,
  #linkedIn,
  #leetCode {
    font-size: 24px;
    @media screen and (max-width: 768px) {
      font-size: 19px;
    }
    transition: all 0.4s ease-in-out;
    &:hover {
      cursor: pointer;
      color: red;
      scale: 1.4;
    }
  }
`
