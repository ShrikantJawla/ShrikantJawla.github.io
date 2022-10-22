import React from 'react'
import { IoIosCodeWorking } from 'react-icons/io'
import { AiFillHome, AiFillProject } from 'react-icons/ai'
import { IoCall } from 'react-icons/io5'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { RiFileList3Line } from 'react-icons/ri'

function SideNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton
        bg="#554e4e"
        ref={btnRef}
        onClick={onOpen}
        icon={<StyledMenu />}
        display={{ base: 'flex', lg: 'none' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton border="1px solid gray" />

          <DrawerBody mt="50px" p="0">
            <StyledHStack spacing={1} onClick={onClose}>
              <AiFillHome />
              <a href="#aboutMePage">
                <MyText>ABOUT</MyText>
              </a>
            </StyledHStack>
            <StyledHStack spacing={1} onClick={onClose}>
              <IoIosCodeWorking size="30px" />
              <a href="#all-skills">
                <MyText>SKILLS</MyText>
              </a>
            </StyledHStack>
            <StyledHStack spacing={1} onClick={onClose}>
              <AiFillProject />
              <a href="#all-projects">
                <MyText>PROJECTS</MyText>
              </a>
            </StyledHStack>
            <StyledHStack spacing={1} onClick={onClose}>
              <IoCall />
              <a href="#my-contacts">
                <MyText>CONTACT</MyText>
              </a>
            </StyledHStack>
            <StyledHStack spacing={1} onClick={onClose}>
              <RiFileList3Line />
              <a
                href="https://github.com/ShrikantJawla/ShrikantJawla.github.io/raw/main/Resume/Shrikant_Jawla_resume.pdf"
                download="Shrikant_Jawla_Resume"
              >
                <MyText>RESUME</MyText>
              </a>
            </StyledHStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideNav

const StyledMenu = styled(IoMdMenu)`
  font-size: 20px;
  transition: all 0.4s ease-in-out;
  color: #d6d6d6;
  &:hover {
    background-color: black;
    cursor: pointer;
    scale: 1.05;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`

const StyledHStack = styled(HStack)`
  width: 100%;
  padding: 20px 0px;
  padding-left: 40px;
  transition: all 0.4s ease-in-out;
  border-bottom: 1px solid #b2aaaa;
  &:hover {
    background-color: #999494;
    cursor: pointer;
    scale: 1.05;
  }
  svg {
    font-size: 25px;
    margin-right: 10px;
  }
`

const MyText = styled(motion.p)`
  font-weight: bold;
  font-size: 23px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.4s ease-in-out;
  &:hover {
    /* background-color: black; */
    cursor: pointer;
    scale: 1.05;
  }
`
