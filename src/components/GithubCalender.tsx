import React, { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactToolTip from 'react-tooltip'

interface Day {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

const selectLastHalfYear = (contributions: any) => {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const shownMonths = 6

  return contributions.filter((day: Day) => {
    const date = new Date(day.date)
    const monthOfDay = date.getMonth()

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    )
  })
}

const GithubCalender = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWindowSize(window.innerWidth)
    })
    return () => window.removeEventListener('resize', () => {})
  }, [])

  return (
    <div className="w-full mb-[100px]">
      {/* Title */}
      <div className="w-[95%] lg:w-[60%] m-[auto] flex justify-start items-center gap-[10px] mb-[25px]">
        <p className="text-white text-[25px] md:text-[30px] font-bold font-mono">
          Github Calendar
        </p>
        <div className="h-[1px] w-[340px] bg-gray-800" />
      </div>
      <GitHubCalendar
        transformData={selectLastHalfYear}
        blockSize={20}
        blockMargin={5}
        fontSize={windowSize <= 350 ? 12 : 20}
        username="shrikantjawla"
        theme={{
          level0: '#F0F0F0',
          level1: '#1bcb53',
          level2: '#049231',
          level3: '#057228',
          level4: '#024617',
        }}
        style={{ color: 'white', margin: 'auto' }}
        year={new Date().getFullYear()}
      >
        <ReactToolTip html delayShow={20} />
      </GitHubCalendar>
    </div>
  )
}

export default GithubCalender
