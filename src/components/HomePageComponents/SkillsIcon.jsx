import { Box, Center, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FcTreeStructure } from 'react-icons/fc'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript, IoLogoNodejs, IoLogoFirebase } from 'react-icons/io'
import { FaReact, FaGithubAlt } from 'react-icons/fa'
import {
  SiExpress,
  SiMongodb,
  SiFramer,
  SiChakraui,
  SiMaterialui,
  SiStyledcomponents,
  SiFirebase,
} from 'react-icons/si'
import styled from 'styled-components'

function SkillIcons() {
  return (
    <Wrapper mt="10" w={{ base: 'auto', lg: '70%' }} h="fit-content">
      <VStack
        justify="center"
        align="center"
        w="100px"
        p={2}
        h="100px"
        rounded={10}
      >
        <AiFillHtml5 id="html" />
        <Text>HTML</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <IoLogoJavascript id="js" />
        <Text>JavaScript</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <DiCss3 id="css" />
        <Text>CSS</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <FcTreeStructure id="dsa" />
        <Text>DSA</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <IoLogoNodejs id="node" />
        <Text>Node JS</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <FaReact id="react" />
        <Text>React</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <FaGithubAlt id="git" />
        <Text>Github</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <SiExpress id="html" />
        <Text>Express</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <SiMongodb id="mongo" />
        <Text>Mongo db</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <SiFirebase id="firebase" />
        <Text>Firebase</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <SiFramer id="motion" />
        <Text>Framer Motion</Text>
      </VStack>
      <VStack justify="center" w="100px" p={2} h="100px" rounded={10}>
        <SiChakraui id="chakra" />
        <Text>Chakra UI</Text>
      </VStack>
      <VStack
        id="lastDiv1"
        justify="center"
        w="100px"
        p={2}
        h="100px"
        rounded={10}
      >
        <SiStyledcomponents id="styled_com" />
        <Text>Styled components</Text>
      </VStack>
      <VStack
        id="lastDiv2"
        justify="center"
        w="100px"
        p={2}
        h="100px"
        rounded={10}
      >
        <SiMaterialui id="mat_ui" />
        <Text>Material UI</Text>
      </VStack>
    </Wrapper>
  )
}

export default SkillIcons

const Wrapper = styled(Box)`
  /* border: 1px solid red; */
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  gap: 10px;
  #lastDiv1 {
    @media screen and (min-width: 750px) {
      grid-area: 3/3/4/4;
    }
  }
  #lastDiv2 {
    @media screen and (min-width: 750px) {
      grid-area: 3/5/5/4;
    }
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  div {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    width: 120px;
    height: 120px;
    background-image: linear-gradient(to left, #d35656, #d7e594);
    &:hover {
      scale: 1.1;
      background-image: none;
      background-color: #c8c4c4;
      color: black;
    }
  }
  div:hover p {
    color: black;
  }
  p {
    font-size: 15px;
    color: white;
    font-weight: bold;
  }
  svg {
    font-size: 35px;
  }
  #html {
    color: blue;
  }
  #css {
    color: #00e1ff;
  }
  #js {
    color: #c5c509;
  }
  #node {
  }
  #react {
    color: #13134f;
  }
  #git {
    color: black;
  }
  #express {
    color: #00e1ff;
  }
  #mongo {
    color: green;
  }
  #firebase {
    color: #e2e205;
  }
  #motion {
    color: blue;
  }
  #chakra {
    color: #63c8c9;
  }
  #mat_ui {
    color: #027fff;
  }
  #styled_com {
    color: #7c3269;
  }
`
