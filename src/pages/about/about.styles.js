import { Box } from "@chakra-ui/react"
import styled from "styled-components"
import { motion as m } from 'framer-motion'

export const Wrapper = styled(Box)`
  overflow: hidden;
  height: fit-content;
  /* padding-bottom: 50px; */
  #content {
    padding: 20px 70px;
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    @media screen and (max-width: 1090px) {
      padding: 20px 20px;
      height: fit-content;
      grid-template-columns: 1fr;
    }

    #background_Text {
      position: absolute;
      top: 0;
      right: -65px;
      color: rgba(143, 140, 140, 0.059);
      box-shadow: 71px 178px 88px 0px rgba(22, 29, 92, 0);
      text-shadow: 0px 4px 4px rgba(36, 36, 36, 0.079);
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 180px;
      line-height: 110px;
      width: 800px;
      height: 240px;
      @media screen and (max-width: 1090px) {
        left: 26%;
        top: 0%;
        font-size: 140px;
      }
      @media screen and (max-width: 767px) {
        width: 471px;
        height: 80px;
        left: 5px;
        top: 5%;
        font-size: 100px;
        line-height: 61px;
      }
    }

    #text_box {
      padding-top: 100px;
      font-family: 'Inter';
      @media screen and (max-width: 1090px) {
        padding: 10px 35px;
        padding-top: 80px;
      }
      @media screen and (max-width: 767px) {
        padding: 20px 13px;
        padding-top: 80px;
      }
      #hi {
        font-style: normal;
        font-weight: 700;
        line-height: 87px;
        letter-spacing: -0.06em;
        font-size: 103px;
        /* or 84% */
        color: rgba(253, 253, 253, 0.76);
        @media screen and (max-width: 767px) {
          font-size: 53px;
          line-height: 57px;
        }
      }
      #shri {
        font-style: normal;
        font-weight: 700;
        line-height: 87px;
        letter-spacing: -0.06em;
        font-size: 104px;
        color: #ffffff;
        @media screen and (max-width: 767px) {
          font-size: 53px;
          line-height: 57px;
        }
      }
      #web_developer {
        font-style: normal;
        font-weight: 700;
        line-height: 87px;
        letter-spacing: -0.06em;
        font-size: 103px;
        color: #bab6b6;
        @media screen and (max-width: 767px) {
          font-size: 51px;
          line-height: 57px;
        }
      }
      #developer {
        font-style: normal;
        font-weight: 700;
        line-height: 70px;
        letter-spacing: -0.06em;
        font-size: 17px;
        line-height: 50px;
        color: #b4b3b3;
        @media screen and (max-width: 767px) {
          font-size: 10px;
          line-height: 37px;
        }
      }
      #about_text {
        width: 92%;
        font-style: normal;
        font-size: 15px;
        line-height: 19px;
        color: #b5b4b4;
        /* color: #6798f4; */
        font-weight: 400;
        @media screen and (max-width: 767px) {
          width: auto;
          font-weight: 600;
          font-size: 8px;
          line-height: 10px;
        }
      }
      #resume_button {
        margin-top: 20px;
        width: 179px;
        height: 53px;
        border: 1px solid rgba(168, 168, 168, 0.66);
        background-color: transparent;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 87px;
        letter-spacing: 1px;
        color: #d4d2d2;
        &:hover {
          color: #fffcfc;
          border: 1px solid rgba(254, 251, 251, 0.66);
        }
        @media screen and (max-width: 767px) {
          width: 170px;
          height: 40px;
          font-size: 14px;
        }
      }
    }

    #image_box {
      width: 350px;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      margin-right: 75px;
      @media screen and (max-width: 1090px) {
        margin: 20px auto;
      }
      img{
        opacity:0.7;
      }
    }
  }
`

export const StyledMotionDiv = styled(m.div)`
  display: inline-block;
`