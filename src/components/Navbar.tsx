import React, { useEffect, useState } from 'react'
import HamBurgerNav from './HamBurgerNav'

const navLinksWithScrollMapping = [
  { name: '_About', minPos: 0, maxPos: 599, link: 'about__part' },
  { name: '_Skills', minPos: 600, maxPos: 2599, link: 'skills__part' },
  { name: '_Projects', minPos: 2600, maxPos: 3999, link: 'project__part' },
  { name: '_Contacts', minPos: 4000, maxPos: 9000, link: 'contact__part' },
]

const Navbar = ({ scrollPosition }: { scrollPosition: number }) => {
  const [active, setActive] = useState<string>('#0d1116')
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => window.removeEventListener('scroll', stickNavbar)
  }, [])
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 56 ? setActive('#010409') : setActive('#0d1116')
    }
  }
  return (
    <div
      style={{ backgroundColor: active }}
      className={`h-[90px] py-1 px-10 flex justify-between fixed top-0 left-0 right-0 z-[15]`}
    >
      <div className="w-[80px] h-full flex justify-center items-center">
        <img
          className="w-[50px]"
          src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/logo.png?raw=true"
          alt="logo"
        />
      </div>
      <div className=" w-fit flex justify-center items-center space-x-7 ">
        {navLinksWithScrollMapping.map((item, ind) => (
          <a
            href={`#${item.link}`}
            className={`nav_btn hidden sm:flex ${
              scrollPosition <= item.maxPos &&
              scrollPosition >= item.minPos &&
              'text-red-500 font-extrabold'
            } font-[FiraCode] text-white text-[20px]`}
            key={ind}
          >
            {item.name}
          </a>
        ))}
        <a
          href="https://github.com/ShrikantJawla/ShrikantJawla.github.io/raw/main/Resume/Shrikant_Jawla_resume.pdf"
          download="Shrikant_Jawla_resume"
          className="uppercase text-[12px] hover:text-blue-500 transition duration-200 ease-in-out hover:scale-105 hidden sm:flex border-[1px] border-sky-600 p-2 px-4 text-sky-600 cursor-pointer"
        >
          resume
        </a>
        <HamBurgerNav />
      </div>
    </div>
  )
}

export default Navbar
