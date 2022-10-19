import {
  Box,
  HStack,
  Image,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'

function RightProjectsSection({
  title,
  skills,
  links,
  description,
  image,
  screenShots,
}) {
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
    <StyledVStack w="full" py="9" h={{ base: 'auto', lg: '100vh' }}>
      <HStack
        id={classChange}
        w={{ base: '99%', lg: '90%' }}
        // border="1px solid red"
        alignSelf={{ base: 'center', lg: 'end' }}
        borderBottomLeftRadius={15}
        borderTopLeftRadius={15}
        borderBottomRightRadius={{ base: '15', lg: 0 }}
        borderTopRightRadius={{ base: '15', lg: 0 }}
      >
        <HStack id="imageSection">
          <Box id="firstImageBox">
            <Image src={screenShots.lg} />
          </Box>
          <Box id="secondImageBox">
            <Image src={screenShots.md} />
          </Box>
        </HStack>
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

            <a href={links.deploy_link}>
              <TbExternalLink />
            </a>
          </div>
        </VStack>
      </HStack>
    </StyledVStack>
  )
}

export default RightProjectsSection

const StyledVStack = styled(VStack)`
  #fistProject {
    background-image: linear-gradient(to left, black, gray);
    margin-right: 0px;
    min-height: 450px;
    position: relative;
    #imageSection {
      width: 44%;
      height: 300px;
      position: absolute;
      left: 2%;
      top: 15%;
      border: 4px solid gray;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;

      #firstImageBox {
        position: relative;
        top: 10%;
        left: 1%;
        width: 260px;
        height: 300px;
        overflow: auto;
        border-radius: 10px;
        transition: all 0.5s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        &::-webkit-scrollbar {
          display: none;
        }
        &:hover {
          scale: 1.08;
          cursor: all-scroll;
          z-index: 2;
          box-shadow: rgba(240, 208, 46, 0.515) -5px 5px,
            rgba(227, 240, 46, 0.3) -10px 10px,
            rgba(166, 240, 46, 0.2) -12px 12px, rgba(12, 9, 11, 0.1) -12px 12px,
            rgba(240, 46, 170, 0.05) -17px 17px;
        }
      }
      #secondImageBox {
        position: relative;
        top: -10%;
        right: -1%;
        width: 260px;
        height: 300px;
        overflow: auto;
        border-radius: 10px;
        transition: all 0.5s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        &::-webkit-scrollbar {
          display: none;
        }
        &:hover {
          scale: 1.08;
          cursor: all-scroll;
          z-index: 2;
          box-shadow: rgba(240, 208, 46, 0.515) 5px 5px,
            rgba(227, 240, 46, 0.3) 10px 10px, rgba(166, 240, 46, 0.2) 12px 12px,
            rgba(12, 9, 11, 0.1) 12px 12px, rgba(240, 46, 170, 0.05) 17px 17px;
        }
      }
    }
    #content__Section {
      position: absolute;
      left: 42%;
      width: 50%;
      align-items: flex-end;

      #title {
        color: white;
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
          color: white;
          font-size: 13px;
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
      #firstImageBox {
        position: relative;
        top: 4%;
        left: 1%;
        width: 260px;
        height: 300px;
        overflow: hidden;
        border-radius: 10px;
        transition: all 0.5s ease-in-out;
        opacity: 0.1;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      #secondImageBox {
        position: relative;
        top: -10%;
        right: -1%;
        width: 260px;
        height: 300px;
        overflow: hidden;
        border-radius: 10px;
        opacity: 0.1;
        transition: all 0.5s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    #content__Section {
      position: absolute;
      left: 5%;
      right: 5%;
      align-items: flex-end;
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

const StyledBox = styled(Box)`
  &::-webkit-scrollbar {
    display: none;
  }
`
