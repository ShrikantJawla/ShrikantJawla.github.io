import React, { useState } from 'react'
import Skill from './SkillCard'
import imgs from '../data/skills.json'

type SingleItemType = {
  title: string
  img: string
  category: string
}

type ImagesType = Array<SingleItemType>

let images = imgs as ImagesType

const Skills = () => {
  const [categoryType, setCategoryType] = useState('')

  return (
    <div id='skills__part' className="w-full h-[254vh] md:h-[190vh] lg:h-[140vh] bg-[#0d1116] pt-[100px] lg:pt-[90px] ">
      <div className="w-full flex flex-col items-center gap-[10px]">
        {/* Title */}
        <div className="w-[95%] lg:w-[60%] m-[auto] flex justify-start items-center gap-[10px] mb-[25px]">
          <p className="text-white text-[25px] md:text-[30px] font-bold font-mono">
            What I know?
          </p>
          <div className="h-[1px] w-[340px] bg-gray-800" />
        </div>
        {/* Main */}
        <div className="w-[80%] md:w-[72%] lg:w-[60%] flex gap-[15px] h-[200px]">
          {/* Buttons */}
          <div className="w-[36%] md:w-[24%] lg:w-[14%] h-full border-l flex flex-col gap-4">
            <button
              onClick={() => setCategoryType('')}
              className={`skills__filter__btn ${
                categoryType === '' && 'border-l-2 border-l-sky-500'
              } `}
            >
              All
            </button>
            <button
              onClick={() => setCategoryType('fe')}
              className={`skills__filter__btn ${
                categoryType === 'fe' && 'border-l-2 border-l-sky-500'
              } `}
            >
              Front End
            </button>
            <button
              onClick={() => setCategoryType('be')}
              className={`skills__filter__btn ${
                categoryType === 'be' && 'border-l-2 border-l-sky-500'
              } `}
            >
              Back End
            </button>
          </div>
          {/* Images part */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-[90%] h-full">
            {images
              .filter((ele: SingleItemType) => {
                if (ele.category !== '' && ele.category === categoryType) {
                  return true
                } else if (categoryType === '') return true
              })
              .map((item: SingleItemType, i) => (
                <Skill title={item.title} img={item.img} key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
