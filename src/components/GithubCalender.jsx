import { Box, Text } from '@chakra-ui/react'
import styled from 'styled-components'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactToolTip from 'react-tooltip'
import { motion as m } from 'framer-motion'
import { fadeInTextVariant } from './skillsPageAnimations'

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const shownMonths = 6

  return contributions.filter((day) => {
    const date = new Date(day.date)
    const monthOfDay = date.getMonth()

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    )
  })
}

function GithubCalender() {
  return (
    <Wrapper
      variants={fadeInTextVariant}
      initial="hidden"
      whileInView="visible"
      mt="40px"
      mx="40px"
    >
      <Text id="intro_text">Some github statistics.</Text>
      <GitHubCalendar
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
        username="shrikantjawla"
        color="green"
        style={{ color: 'white' }}
        year={new Date().getFullYear()}
      >
        <ReactToolTip html delayShow={20} />
      </GitHubCalendar>
    </Wrapper>
  )
}

export default GithubCalender

const Wrapper = styled(m(Box))`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 150px;

  #intro_text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    color: #ffffff;
    line-height: 42px;
    box-shadow: 14px 16px 4px 0px rgba(135, 154, 19, 0.57);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      14px 16px 4px rgba(135, 154, 19, 0.57);
  }

  @media screen and (max-width: 1024px) {
    gap: 50px;
  }
  @media screen and (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`
