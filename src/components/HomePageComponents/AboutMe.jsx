import { Box, Heading, Image, Text, } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

function AboutMe() {
  return (
    <Wrapper id='aboutMePage' w="full" h={{base:'fit-content',lg:"auto"}}  bg="#f5f2f6" py='80px'>
      <Heading id="aboutmeText">About me</Heading>
      <Box className="container" w={{base:'100%',lg:"85%"}} >
        <Box className="aboutMeTitle">
          <Text id="iam">I am a</Text>
          <Text id="fswd">Full Stack Web Developer</Text>
          <Box id="detail">
            Aspiring Software Developer equipped with problem-solving and
            user-centric attitude. Has a deep interest in IT and is capable of
            writing code in React, Redux, HTML, and CSS, on the front end, Node
            JS and Express Js on the backend. A team player and intensely
            interested in obtaining a software developer position to work on
            enhancing the product experience.
          </Box>
        </Box>
        <Box id="image">
          <Box position="relative" border="4px solid grey" w="280px" h="280px">
            <Image
              h="full"
              pos="absolute"
              top="-5%"
              left="-5%"
              boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
              src="https://github.com/ShrikantJawla/ShrikantJawla.github.io/blob/main/public/images/myPhotos/photo_2022-07-08_16-49-45.jpg?raw=true"
            />
          </Box>
        </Box>
      </Box>
      
    </Wrapper>
  )
}

export default AboutMe

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-top:30px;
  @media screen and (max-width:468px){
    /* border: 1px solid black; */
  }
  #aboutmeText {
    padding-top: 20px;
    color: red;
    text-decoration: underline;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 80px;
  }

  .container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    padding: 10px 40px;
    gap: 30px;
    @media screen and (max-width:468px){
      grid-template-columns: 100%;
      height: fit-content;
    }
    .aboutMeTitle {
      #iam {
        font-size: 17px;
      }
      #fswd {
        font-size: 38px;
        font-weight: bold;
        color: #0040ff;
      }
      #detail {
        padding: 5px;
        color: #645959;
        font-size: 18px;
      }
    }
    #image {
      /* border: 1px solid blue; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  
`
