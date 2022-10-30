import { Box } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'
import styled from 'styled-components'

function ProjectSection2({ project1, project2 }) {
  return (
    <Wrapper>
      <div className="projectSection1">
        <div className="subSection1">
          <img
            className="projectImg"
            src={project1.projectImg}
            alt="projectImage"
          />
          <div className="textDiv">
            <div className="titleOfProject">
              {project1.title}
              <Box display="flex" fontSize={{ base: '18', lg: 25 }} gap="10px">
                <a
                  style={{ cursor: 'pointer' }}
                  href={project1.links.github}
                  target="blank"
                >
                  <AiFillGithub />
                </a>
                <a
                  style={{ cursor: 'pointer' }}
                  href={project1.links.deploy_link}
                  target="blank"
                >
                  <RiExternalLinkFill />
                </a>
              </Box>
            </div>
            <div className="aboutProject">{project1.aboutText}</div>
            <img
              className="tectStacksImgs"
              alt="techStacks"
              src={project1.techStackImg[0]}
            />
            <img
              className="tectStacksImgsMobile"
              alt="techStacks"
              src={project1.techStackImg[1]}
            />
          </div>
        </div>
        <div className="subSection2">
          <img
            className="projectImg"
            src={project2.projectImg}
            alt="projectImage"
          />
          <div className="textDiv">
            <div className="titleOfProject">
              {project2.title}
              <Box display="flex" fontSize={{ base: '18', lg: 25 }} gap="10px">
                <a
                  style={{ cursor: 'pointer' }}
                  href={project2.links.github}
                  target="blank"
                >
                  <AiFillGithub />
                </a>
                <a
                  style={{ cursor: 'pointer' }}
                  href={project2.links.deploy_link}
                  target="blank"
                >
                  <RiExternalLinkFill />
                </a>
              </Box>
            </div>
            <div className="aboutProject">{project2.aboutText}</div>
            <img
              className="tectStacksImgs"
              alt="techStacks"
              src={project2.techStackImg[0]}
            />
            <img
              className="tectStacksImgsMobile"
              alt="techStacks"
              src={project2.techStackImg[1]}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProjectSection2

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background: #1c1d1c;
  margin: auto;
  justify-content: center;

  .projectSection1 {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 57px;
    width: 100%;
    height: fit-content;
    /* @media screen and (max-width: 1090px) {
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 767px) {
    } */
    @media screen and (max-width: 1090px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
    }
    @media screen and (max-width: 992px) {
      display: flex;
      flex-direction: column;
    }
    .subSection1 {
      margin-top: 107px;
      width: 720px;
      height: fit-content;
      padding-bottom: 60px;
      @media screen and (max-width: 1090px) {
        margin-top: 40px;
        width: 430px;
      }
      @media screen and (max-width: 767px) {
        margin-top: auto;
        width: 280px;
        height: 384px;
      }
      border: 0.5px solid rgba(157, 157, 157, 0.284);
      transition: all 0.5s ease-in-out;
      &:hover {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.192) 0%,
          rgba(255, 255, 255, 0.066) 100%
        );
        border: 0.5px solid rgba(175, 172, 172, 0.53);
      }
      .projectImg {
        height: 417px;
        width: 100%;
        @media screen and (max-width: 1090px) {
          width: 430px;
          height: 320px;
        }
        @media screen and (max-width: 767px) {
          width: 280px;
          height: 188px;
        }
      }

      .textDiv {
        padding-left: 20px;
        padding-top: 28px;
        @media screen and (max-width: 1090px) {
          padding: auto;
          padding-top: 20px;
          padding-right: 17px;
        }
        @media screen and (max-width: 767px) {
        }
        .titleOfProject {
          margin-bottom: 25px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          font-size: 35px;
          line-height: 42px;
          color: rgba(210, 208, 208, 0.95);
          @media screen and (max-width: 1090px) {
            margin-bottom: 16px;
            font-size: 15px;
            line-height: 12px;
          }
          @media screen and (max-width: 767px) {
            margin-bottom: 16px;
            font-size: 10px;
            line-height: 12px;
          }
        }
        .tectStacksImgs {
          width: 682px;
          height: 67.52px;
          @media screen and (max-width: 1090px) {
            margin-bottom: 20px;
          }
          @media screen and (max-width: 767px) {
            display: none;
          }
        }
        .tectStacksImgsMobile {
          width: 218px;
          height: 34.72px;
          margin-bottom: 17px;
          display: none;
          @media screen and (max-width: 1090px) {
            margin-bottom: 15px;
          }
          @media screen and (max-width: 767px) {
            display: flex;
          }
        }
      }
      .aboutProject {
        width: 680px;
        margin-bottom: 24px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        @media screen and (max-width: 1090px) {
          width: 95%;
          font-size: 13px;
        }
        @media screen and (max-width: 767px) {
          font-size: 10px;
          line-height: 12px;
          width: 90%;
        }
      }
    }
    .subSection2 {
      padding-bottom: 30px;
      width: 428px;
      height: fit-content;
      @media screen and (max-width: 1090px) {
        width: 430px;
      }
      @media screen and (max-width: 767px) {
        width: 280px;
        height: 384px;
      }
      border: 0.5px solid rgba(157, 157, 157, 0.284);
      transition: all 0.5s ease-in-out;
      &:hover {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.192) 0%,
          rgba(255, 255, 255, 0.066) 100%
        );
        border: 0.5px solid rgba(175, 172, 172, 0.53);
      }

      .projectImg {
        height: 340px;
        width: 100%;
        @media screen and (max-width: 1090px) {
          width: 430px;
          height: 320px;
        }
        @media screen and (max-width: 767px) {
          width: 280px;
          height: 188px;
        }
      }

      .textDiv {
        padding-left: 20px;
        padding-top: 28px;
        @media screen and (max-width: 1090px) {
          padding: auto;
          padding-top: 20px;
          padding-right: 17px;
        }
        @media screen and (max-width: 767px) {
        }
        .titleOfProject {
          margin-bottom: 20px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          font-size: 35px;
          line-height: 42px;
          color: rgba(210, 208, 208, 0.95);
          @media screen and (max-width: 1090px) {
            margin-bottom: 16px;
            font-size: 15px;
            line-height: 12px;
          }
          @media screen and (max-width: 767px) {
            margin-bottom: 16px;
            font-size: 10px;
            line-height: 12px;
          }
        }
        .tectStacksImgs {
          width: 340px;
          height: 145.52px;
          @media screen and (max-width: 1090px) {
            margin-bottom: 20px;
          }
          @media screen and (max-width: 767px) {
            display: none;
          }
        }
        .tectStacksImgsMobile {
          width: 218px;
          height: 34.72px;
          margin-bottom: 17px;
          display: none;
          @media screen and (max-width: 1090px) {
            margin-bottom: 15px;
          }
          @media screen and (max-width: 767px) {
            display: flex;
          }
        }
      }
      .aboutProject {
        margin-bottom: 20px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        @media screen and (max-width: 1090px) {
          width: 95%;
          font-size: 13px;
        }
        @media screen and (max-width: 767px) {
          font-size: 10px;
          line-height: 12px;
          width: 90%;
        }
      }
    }
  }
`
