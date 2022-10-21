import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { SiMinutemailer } from 'react-icons/si'
import { MdOutlineSendToMobile } from 'react-icons/md'

const ContactMe = () => {
  return (
    <Wrapper id='my-contacts'>
      <VStack
        w={{ base: '98%', md: '90%', lg: '70%' }}
        h="fit-content"
        // border="1px solid red"
        p="10px"
        py="35px"
        spacing={10}
      >
        <Text fontFamily="sans-serif" textAlign="center" fontSize={20}>
          <Heading id="contactMeTitle">Contact me </Heading> <br /> any time
          whenever you feel like. I will try to reply ASAP.
        </Text>
        <Box id="links" display="flex" flexDirection="column" gap="20px">
          <HStack>
            <IconButton
              icon={<SiMinutemailer fontSize={25} color="teal" />}
              variant="outline"
            />
            <Text fontSize={22} fontWeight="500" fontFamily="sans-serif">
              shrikantjawla@gmail.com
            </Text>
          </HStack>
          <HStack>
            <IconButton
              variant="outline"
              icon={<MdOutlineSendToMobile fontSize={25} color="teal" />}
            />
            <Text fontSize={22} fontWeight="500" fontFamily="sans-serif">
              +91 9069006661
            </Text>
          </HStack>
        </Box>
        <VStack w={{ base: '98%', md: '80%', lg: '65%' }} spacing={3}>
          <HStack w="full">
            <FormControl>
              <FormLabel color="blackAlpha.900">Name</FormLabel>
              <Input variant="filled" outline="1px solid grey" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input variant="filled" outline="1px solid grey" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input variant="filled" outline="1px solid grey" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea variant="filled" outline="1px solid grey" />
          </FormControl>
          <Button
            bg="#008080"
            w="120px"
            color="#ffffff"
            fontSize="18px"
            fontWeight="bold"
            _hover={{ bg: '#0c9b9e' }}
          >
            Send
          </Button>
        </VStack>
      </VStack>
    </Wrapper>
  )
}

export default ContactMe

const Wrapper = styled(Box)`
  padding: 10px;
  padding-top: 80px;
  width: 100vw;
  height: fit-content;
  background-color: #f0ede3;
  display: flex;
  justify-content: center;

  #contactMeTitle {
    color: red;
    text-decoration: underline;
    font-family: 'Times New Roman', Times, serif;
  }
`
