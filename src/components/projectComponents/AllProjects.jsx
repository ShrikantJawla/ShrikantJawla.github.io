import { Text, VStack } from '@chakra-ui/react'
import React from 'react'
import data from '../../DataBase/projectsDetails.json'
import RightProjectsSection from './RightProjectsSection'
import LeftProjectsSection from './LeftProjectsSection'

function AllProjects() {
  return (
    <VStack w="full" bg="#f4f5f6" pt="10" overflow="hidden">
      <Text
        w="full"
        textAlign="center"
        fontSize={30}
        fontWeight="bold"
        color="red"
      >
        Some of the things I've built
      </Text>
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
