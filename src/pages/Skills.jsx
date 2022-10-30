import styled from 'styled-components'
import React from 'react'
import GithubCalender from '../components/GithubCalender'
import GithubStats from '../components/GithubStats'
import { motion as m } from 'framer-motion'
import {
  child,
  fadeInTextVariant,
  fadeInVariant,
} from '../components/skillsPageAnimations'

function Skills() {
  return (
    <Wrapper id="skills__Page">
      <p id="background_Text">What I know?</p>
      <div className="backgroundCircle"></div>
      <m.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        className="stats_box"
      >
        <div className="coding">
          <p className="hours_data">3000+</p>
          <p className="hours_text">
            hours of <br /> Coding
          </p>
        </div>
        <div className="leetcode">
          <p className="hours_data">130+</p>
          <p className="hours_text">
            Leetcode <br /> problems <br /> solved
          </p>
        </div>
        <div className="projects">
          <p className="hours_data">10+</p>
          <p className="hours_text">
            Projects <br /> done
          </p>
        </div>
        <div className="softkills">
          <p className="hours_data">100+</p>
          <p className="hours_text">
            hours of <br /> Softskills
          </p>
        </div>
      </m.div>
      <div className="tect_skills_container">
        <m.div
          variants={fadeInTextVariant}
          initial="hidden"
          whileInView="visible"
          className="text_div"
        >
          During these 7 months of learning I practiced html, css, javaScript,
          TypeScript, React,Redux, some styled and animation libraries like
          styled-compnents, framer-motion, Chakra UI, for front end, Node JS,
          Express JS, Mongo DB, and other web apps like firebase enabled me to
          create clones of some of the good websites like Survey-Monkey,
          ZoomCar, tesla and many small projects.
        </m.div>
        <div className="image_div">
          <img
            src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/skillsImg.png?raw=true"
            alt="text_skills"
          />
        </div>
      </div>
      <div className="soft_skills_container">
        <m.div
          variants={fadeInTextVariant}
          initial="hidden"
          whileInView="visible"
          className="skills_divs_part"
        >
          <m.div variants={child} className="div1">
            <img
              className="image"
              src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/communicationImg.png?raw=true"
              alt="communication"
            />
            <p className="text">
              Practicing for 100+ hours of soft skills like discussing on
              problems with collegues and IAs helped me communicate better.
            </p>
          </m.div>
          <div className="div2">
            <m.div variants={child} className="sub_div1">
              <img
                className="image"
                src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/timeManagementImg.png?raw=true"
                alt="time-management"
              />
              <p className="text">
                During 9-9 study-hours time management helped me a lot to
                identify most required tasks.
              </p>
            </m.div>
            <m.div variants={child} className="sub_div2">
              <img
                className="image"
                src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/remoteWorkImg.png?raw=true"
                alt="remoteWork"
              />
              <p className="text">
                Pandamic time and taking education online via Zoom made me work
                remotely.
              </p>
            </m.div>
          </div>
          <m.div variants={child} className="div3">
            <img
              className="image"
              src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/dsaImg.png?raw=true"
              alt="DSA"
            />
            <p className="text">
              Solving a lot of DSA problems made me take any problem with
              problem soving aptitude.
            </p>
          </m.div>
        </m.div>
        <m.div
          variants={fadeInTextVariant}
          initial="hidden"
          whileInView="visible"
          className="text_div"
        >
          Only handling machines is obviously not enough, As ability to work in
          teams and having communication with collegues, so that they understand
          me better I practiced for more than 100+ hours so that I can be good
          fit not only in tech skills but also in soft skills.
        </m.div>
      </div>
      <GithubCalender />
      <GithubStats />
    </Wrapper>
  )
}

export default Skills

const Wrapper = styled.div`
  overflow-x: hidden;
  /* padding-left: 150px; */
  padding: 20px 70px;
  padding-top: 130px;
  width: 100%;
  height: fit-content;
  background: #1c1d1c;
  position: relative;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1090px) {
    padding: 80px 20px;
  }

  .backgroundCircle {
    position: absolute;
    width: 486px;
    height: 495px;
    right: -20%;
    top: 863px;
    border-radius: 50%;
    background: radial-gradient(
        73.91% 71.82% at 6.48% 24.14%,
        rgba(235, 158, 158, 0.15) 0%,
        rgba(28, 191, 44, 0.114) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    mix-blend-mode: normal;
    opacity: 0.8;
    backdrop-filter: blur(200px);
    /* Note: backdrop-filter has minimal browser support */
    @media screen and (max-width: 1090px) {
      right: -50%;
    }
    @media screen and (max-width: 767px) {
      right: -99%;
    }
  }

  #background_Text {
    position: absolute;
    top: 10%;
    right: -65px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 190px;
    line-height: 230px;
    color: rgba(143, 140, 140, 0.059);
    text-shadow: 0px 4px 4px rgba(59, 59, 59, 0.048);
    @media screen and (max-width: 1090px) {
      left: 13%;
      top: 0%;
      font-size: 110px;
      line-height: 130px;
    }
    @media screen and (max-width: 767px) {
      width: 471px;
      height: 80px;
      left: 60px;
      top: 0;
      font-size: 100px;
      line-height: 61px;
    }
  }

  .stats_box {
    margin-left: 15px;
    width: 224px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .coding,
    .leetcode,
    .projects,
    .softkills {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 112px;
      height: 110px;
      left: 179px;
      top: 158px;
      background: linear-gradient(
        135.49deg,
        rgba(255, 255, 255, 0.217) 0%,
        rgba(255, 255, 255, 0) 102.75%
      );
      .hours_data {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #d8d4d4;
      }
      .hours_text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.05em;
        color: #a6a3a3;
      }
    }
  }

  .tect_skills_container {
    position: relative;
    height: fit-content;
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    @media screen and (max-width: 1090px) {
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
    }
    @media screen and (max-width: 767px) {
    }
    .text_div {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      @media screen and (max-width: 1090px) {
        margin: auto;
        width: 80%;
      }
      @media screen and (max-width: 767px) {
        margin: auto;
        width: 95%;
      }
    }
    .image_div {
      width: 100%;
      height: 400px;
      @media screen and (max-width: 1090px) {
        height: fit-content;
        margin-top: 20px;
      }
      img {
        position: absolute;
        top: -55%;
        right: 5%;
        width: 593px;
        height: 555px;
        @media screen and (max-width: 1090px) {
          position: static;
          margin-top: 70px;
          margin: auto;
        }
        @media screen and (max-width: 767px) {
          height: 460px;
        }
      }
    }
  }
  .soft_skills_container {
    height: 651px;
    display: grid;
    grid-template-columns: 651px 483px;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1090px) {
      margin-top: 40px;
      display: flex;
      flex-direction: column-reverse;
      height: fit-content;
    }
    @media screen and (max-width: 767px) {
    }
    .text_div {
      z-index: 1;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      @media screen and (max-width: 1090px) {
        margin: auto;
        width: 80%;
      }
      @media screen and (max-width: 767px) {
        margin: auto;
        width: 95%;
      }
    }
    .skills_divs_part {
      justify-content: center;
      align-items: center;
      display: flex;
      height: 100%;
      gap: 9px;
      @media screen and (max-width: 1090px) {
      }
      @media screen and (max-width: 767px) {
        flex-direction: column;
      }
      .text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
      }
      .image {
        width: 100%;
        height: 147px;
      }
      .div1,
      .div3 {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        text-align: center;
        width: 211px;
        height: 278px;
        background: linear-gradient(
          150.06deg,
          #ffffff 0%,
          rgba(255, 253, 253, 0) 100%
        );
      }

      .div2 {
        display: flex;
        flex-direction: column;
        gap: 9px;
        .sub_div1,
        .sub_div2 {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
          text-align: center;
          width: 211px;
          height: 278px;
          background: linear-gradient(
            150.06deg,
            #ffffff 0%,
            rgba(255, 253, 253, 0) 100%
          );
        }
      }
    }
  }
`
