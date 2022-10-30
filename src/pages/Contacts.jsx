import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { motion as m } from 'framer-motion'
import styled from 'styled-components'

const MBox = m(Box)

function Contacts() {
  return (
    <MotionBox
      background="#1c1d1c"
      w="full"
      h="120vh"
      id="contact__Page"
    >
      <Box
        position="relative"
        // ml={{ xl: '180px' }}
        alignContent="center"
        display="flex"
        justifyContent="center"
      >
        <Box className="greenBox"></Box>
        <MBox
          initial={{ y: '30%' }}
          whileInView={{ y: '0' }}
          transition={{ duration: 1 }}
          className="titleBox"
        >
          <Text className="contact_text">Contact</Text>
        </MBox>
        <Box
          className="blackBox"
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
        >
          <Box
            w='500px'
            p="40px"
            className="firstBox"
            display="flex"
            justifyContent="center"
            alignContent="center"
            flexDirection="column"
          >
            <Box h="250px" display="flex" flexDirection="column">
              <Text className="firstBox_text">
                Contact me anytime whenever you feel like. I will always be happy to reply
                ASAP.
              </Text>
              <Box
                display="flex"
                gap={7}
                className="contact_details"
                mb="15px"
                alignItems="center"
              >
                <img src="/Images/emailImg.png" alt="phoneImg" />
                <Text>shrikantjawla@gmail.com</Text>
              </Box>
              <Box
                display="flex"
                gap={7}
                className="contact_details"
                alignItems="center"
              >
                <img src="/Images/phoneImgg.png" alt="phoneImg" />
                <Text>+91-9069006661</Text>
              </Box>
            </Box>
          </Box>
          <Box
            w={{ base: '100%', lg: '700px' }}
            p="10px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
          >
            <VStack w="98%" spacing={10} m="auto">
              <HStack w="full">
                <FormControl>
                  <Input
                    variant="ouline"
                    outline="none"
                    borderBottom="1px solid grey"
                    placeholder="Name"
                    background="transparent"
                    color="white"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    variant="ouline"
                    outline="none"
                    borderBottom="1px solid grey"
                    placeholder="Email"
                    background="transparent"
                    color="white"
                  />
                </FormControl>
              </HStack>
              <FormControl>
                <Input
                  variant="ouline"
                  outline="none"
                  borderBottom="1px solid grey"
                  placeholder="Subject"
                  background="transparent"
                  color="white"
                />
              </FormControl>
              <FormControl>
                <Textarea
                  variant="ouline"
                  outline="none"
                  borderBottom="1px solid grey"
                  placeholder="Message"
                  background="transparent"
                  color="white"
                />
              </FormControl>
              <Button
                variant="outline"
                bg="transparent"
                w="160px"
                color="#ffffff"
                fontSize="18px"
                fontWeight="bold"
                _hover={{ bg: '#272525' }}
              >
                Send
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  )
}

export default Contacts

const MotionBox = styled(MBox)`
  overflow: hidden;
  .greenBox {
    position: absolute;
    /* width: 1269px; */
    height: 600px;
    left: 2%;
    right: 2%;
    top: 65px;
    background: #474847;
    border-radius: 70px;
    @media screen and (max-width: 1090px) {
      width: 98%;
    }
    @media screen and (max-width: 767px) {
    }
  }

  .titleBox {
    position: absolute;
    width: 673px;
    height: 405px;
    left: 390px;
    top: 98px;
    background: linear-gradient(
      94.52deg,
      rgba(255, 251, 251, 0.41) 0%,
      rgba(255, 255, 255, 0.0738) 95.88%
    );
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1090px) {
      width: 373px;
      left: 35%;
    }
    @media screen and (max-width: 767px) {
      width: 253px;
      left: 17%;
    }

    .contact_text {
      margin-top: 10px;
      width: 375px;
      height: 116px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 90px;
      line-height: 109px;
      color: #990505;
      /* box-shadow: 35px 4px 7px 0px rgba(0, 0, 0, 0.25); */
      text-shadow: 35px 4px 7px rgba(0, 0, 0, 0.25);
      text-align: center;
      @media screen and (max-width: 1090px) {
      }
      @media screen and (max-width: 767px) {
        font-size: 65px;
      }
    }
  }

  .blackBox {
    position: absolute;
    /* width: 1269px; */
    height: 600px;
    left: 2%;
    right: 2%;
    top: 190px;
    /* background: #101010; */
    background: linear-gradient(
      180deg,
      #000000 0%,
      rgba(35, 34, 34, 0.97) 100%
    );
    @media screen and (max-width: 1090px) {
      width: 98%;
    }
    @media screen and (max-width: 767px) {
    }

    .firstBox {
      margin: auto;
      .firstBox_text {
        font-family: 'Inter';
        margin: auto;
        font-style: normal;
        text-align: left;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #ffffff;
        margin-top: -7px;
        margin-bottom: 30px;
      }
      @media screen and (max-width: 1090px) {
        width: 80%;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }

      img {
        width: 45px;
        height: 45px;
      }

      .contact_details {
        p {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #ffffff;
        }
      }
    }
  }
`
