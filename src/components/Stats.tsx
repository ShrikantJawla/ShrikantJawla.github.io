import React from 'react'
import GithubCalender from './GithubCalender'
import GithubStats from './GithubStats'

const Stats = () => {
  return (
    <div className="w-full h-fit md:h-[280vh] lg:h-[170vh] xl:h-[200vh] bg-[#15191f] pt-[100px] lg:pt-[90px] ">
      <div className="w-full flex flex-col items-center gap-[10px]">
        {/* Github Calender */}
        <GithubCalender />
        {/* Github Stats */}
        <GithubStats />
      </div>
    </div>
  )
}

export default Stats
