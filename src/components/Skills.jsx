import { Box, Heading } from '@chakra-ui/react'
import styled from 'styled-components'
import React from 'react'
import SkillIcons from './HomePageComponents/SkillsIcon'
import SoftSkills from './SoftSkills'
import GithubCalender from './GithubCalender'
import GithubStats from './GithubStats'

function Skills() {
  return (
    <Wrapper id="all-skills" w="full" h="fit-content" py="80px">
      <Box id="skillsTitle">
        <Heading>Tech Skills</Heading>
      </Box>
      <SkillIcons />
      <Box id="softSkillsTitle">
        <Heading>Soft Skills</Heading>
      </Box>
      <SoftSkills />
      <GithubCalender />
      <GithubStats />
    </Wrapper>
  )
}

export default Skills

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #skillsTitle {
    color: red;
    text-decoration: underline;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 30px;
  }

  #softSkillsTitle {
    margin-top: 70px;
    color: red;
    text-decoration: underline;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 60px;
  }
`
