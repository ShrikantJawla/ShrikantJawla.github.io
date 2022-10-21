import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'
import { useBreakpointValue } from '@chakra-ui/react'

function LeftProjectsSection({ title, skills, links, description, image }) {
  const classChange = useBreakpointValue(
    {
      base: 'fistProject_smallScreen',
      md: 'fistProject',
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'base',
    },
  )

  return (
    <StyledVStack w="full" py="9" h={{ base: 'auto', lg: 'auto' }}>
      <HStack
        id={classChange}
        w={{ base: '99%', lg: '90%' }}
        // border="1px solid red"
        alignSelf={{ base: 'center', lg: 'start' }}
        borderBottomLeftRadius={{ base: '15', lg: 0 }}
        borderTopLeftRadius={{ base: '15', lg: 0 }}
        borderBottomRightRadius={15}
        borderTopRightRadius={15}
      >
        <VStack id="content__Section">
          <div id="title">
            <p>{title}</p>
          </div>
          <div id="infoPart">
            <p>{description}</p>
          </div>
          <ul id="skills">
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
          <div id="links">
            <a href={links.github} target="blank">
              <FaGithub />
            </a>

            <a href={links.deploy_link} target="blank">
              <TbExternalLink />
            </a>
          </div>
        </VStack>
        <HStack id="imageSection">
          <Image src={image} />
        </HStack>
      </HStack>
    </StyledVStack>
  )
}

export default LeftProjectsSection

const StyledVStack = styled(VStack)`
  #fistProject {
    background-image: linear-gradient(to left, red, #eaea74);
    margin-left: 0px;
    min-height: 450px;
    position: relative;
    #imageSection {
      object-fit: contain;
      width: 40%;
      height: 300px;
      position: absolute;
      right: 5%;
      top: 15%;
      border: 4px solid gray;
      img {
        position: relative;
        top: -5%;
        left: 5%;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease-in-out;
        &:hover {
          scale: 1.1;
          z-index: 2;
        }
      }
    }
    #content__Section {
      position: absolute;
      right: 42%;
      width: 50%;
      align-items: flex-start;
      z-index: 1;
      #title {
        color: black;
        font-weight: bold;
        font-size: 20px;
      }
      #infoPart {
        padding: 24px 10px;
        background-color: #262626;
        color: white;
      }
      #skills {
        display: flex;
        gap: 10px;
        li {
          list-style: none;
          color: black;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.5s ease-in-out;
          @media screen and (min-width: 768px) and (max-width: 992px) {
            font-size: 11px;
          }
          &:hover {
            scale: 1.05;
            color: red;
          }
        }
      }
      #links {
        display: flex;
        gap: 14px;
        svg {
          color: black;
          font-size: 17px;
          cursor: pointer;
          transition: all 0.4s ease-in-out;
          &:hover {
            scale: 1.4;
          }
        }
      }
    }
  }

  //Css for smaller screens
  #fistProject_smallScreen {
    background-color: #262626;
    position: relative;
    min-height: 400px;
    #imageSection {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        opacity: 0.3;
        /* filter: grayscale(0.5); */
      }
    }
    #content__Section {
      position: absolute;
      left: 5%;
      right: 5%;
      align-items: flex-start;
      z-index: 1;
      #title {
        color: white;
        font-weight: bold;
        font-size: 20px;
      }
      #infoPart {
        border-radius: 10px;
        line-height: 1.4;
        padding: 14px 10px;
        background-color: #262626;
        color: white;
      }
      #skills {
        display: flex;
        gap: 7px;
        li {
          list-style: none;
          color: white;
          font-size: 10px;
          cursor: pointer;
          transition: all 0.5s ease-in-out;
          &:hover {
            scale: 1.05;
            color: red;
          }
        }
      }
      #links {
        display: flex;
        gap: 14px;
        svg {
          color: white;
          font-size: 17px;
          cursor: pointer;
          transition: all 0.4s ease-in-out;
          &:hover {
            scale: 1.4;
          }
        }
      }
    }
  }
`
