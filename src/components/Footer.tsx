import React from 'react'
import { SiLeetcode } from 'react-icons/si'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="w-full h-[280px] md:h-[200px] flex flex-col md:flex-row justify-center gap md:gap-4 bg-black absolute bottom-0">
      {/* Links Section */}
      <div className="w-full md:w-[40%] h-[50%] md:h-full flex flex-col items-center p-10">
        <p className="text-white w-[40%] ">Links</p>
        <div className="w-[40%] h-fit py-2 flex  gap-5 justify-start items-center">
          <a
            href="https://github.com/ShrikantJawla"
            target={'_blank'}
            rel="noreferrer"
          >
            <AiFillGithub className="text-[22px] text-white cursor-pointer hover:scale-125 transition duration-700 ease-in-out" />
          </a>
          <a
            href="https://www.linkedin.com/in/shrikant-jawla"
            target={'_blank'}
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-[22px] text-white cursor-pointer hover:scale-125 transition duration-700 ease-in-out" />
          </a>
          <a
            href="https://leetcode.com/shrikantjawla"
            target={'_blank'}
            rel="noreferrer"
          >
            <SiLeetcode className="text-[22px] text-white cursor-pointer hover:scale-125 transition duration-700 ease-in-out" />
          </a>
        </div>
      </div>

      {/* Contacts Section  */}
      <div className="w-full md:w-[40%] h-[50%] md:h-full flex flex-col items-center p-10">
        <p className="text-white w-[40%]">Contacts</p>
        <div className="w-[55%] md:w-[40%] h-fit m-[auto] mt-5 flex flex-col items-center justify-center gap-0">
          <div className="w-full h-[20px] flex justify-start items-center gap-3">
            <img
              className="h-[16px]"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
              alt="wattsapp icon"
            />
            <a href="tel:+919069006661" className="text-white text-[12px]">
              +91-9069006661
            </a>
          </div>
          <div className="w-full h-[20px] flex justify-start items-center gap-3">
            <img
              className="h-[16px]"
              src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
              alt="wattsapp icon"
            />
            <a
              href="mailto:shrikantjawla@gmail.com"
              className="text-white text-[12px]"
            >
              shrikantjawla@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
