import React from 'react'

type PropsType = {
  title: string
  img: string
}

const Skill = ({ title, img }: PropsType) => {
  return (
    <div className="w-[90px] h-[130px] hover:bg-[#1d232d] transition duration-150 ease-in-out cursor-pointer flex flex-col justify-center items-center shadow-md gap-1">
      <img className="w-full h-[85px] object-cover" src={img} alt="" />
      <p className="text-gray-300">{title}</p>
    </div>
  )
}

export default Skill
