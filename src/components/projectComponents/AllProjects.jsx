import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import data from '../../DataBase/projectsDetails.json'
import RightProjectsSection from './RightProjectsSection'
import LeftProjectsSection from './LeftProjectsSection'
import styled from 'styled-components'

function AllProjects() {
  return (
    <VStack id="all-projects" w="full" bg="#e8e8e8" pt="90px" overflow="hidden">
      <StyledHeading w="full" textAlign="center">
        Some of the things I've built
      </StyledHeading>
      {data.projects.map((project, ind) =>
        ind % 2 === 0 ? (
          <RightProjectsSection
            title={project.title}
            links={project.links}
            skills={project.skills}
            description={project.description}
            image={project.image}
            screenShots={project.screenshots}
          />
        ) : (
          <LeftProjectsSection
            title={project.title}
            links={project.links}
            skills={project.skills}
            description={project.description}
            image={project.image}
            screenShots={project.screenshots}
          />
        ),
      )}
    </VStack>
  )
}

export default AllProjects

const StyledHeading = styled(Heading)`
  color: red;
  text-decoration: underline;
  font-family: 'Times New Roman', Times, serif;
  margin-bottom: 40px;
`
