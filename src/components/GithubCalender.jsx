import { Box } from '@chakra-ui/react'
import styled from 'styled-components'
import React, { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactToolTip from 'react-tooltip'

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
    <Wrapper mt="60px">
      <GitHubCalendar
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
        username="shrikantjawla"
        year={new Date().getFullYear()}
      >
        <ReactToolTip html delayShow={20}/>
      </GitHubCalendar>
    </Wrapper>
  )
}

export default GithubCalender

const Wrapper = styled(Box)``
