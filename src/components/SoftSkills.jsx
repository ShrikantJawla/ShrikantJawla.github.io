import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { FcManager } from 'react-icons/fc'
import { GiSandsOfTime, GiAbstract063 } from 'react-icons/gi'
import { TiHomeOutline } from 'react-icons/ti'
import styled from 'styled-components'

function SoftSkills() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      w={{ base: 'auto', lg: '60%' }}
      justifyContent="center"
      alignItems="center"
      gap="10"
    >
      <StyledVStack>
        <FcManager fontSize={27} color="green" />
        <Skills>
          Communication <br /> Skill
        </Skills>
      </StyledVStack>
      <StyledVStack>
        <GiSandsOfTime fontSize={27} color="blue" />
        <Skills>
          Time <br /> Management
        </Skills>
      </StyledVStack>
      <StyledVStack>
        <GiAbstract063 fontSize={27} color="red" />
        <Skills>
          Problem <br /> Solving mindset
        </Skills>
      </StyledVStack>
      <StyledVStack>
        <TiHomeOutline fontSize={27} color="brown" />
        <Skills>
          Remote Work <br /> and Online
        </Skills>
      </StyledVStack>
    </Box>
  )
}

export default SoftSkills

const Skills = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

const StyledVStack = styled(VStack)`
  background-image: linear-gradient(to left, #cbd356, #eeaa98);
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 210px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  gap: 14px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    scale: 1.1;
    background-image: none;
    background-color: #c8c4c4;
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 180px;
  }
`
