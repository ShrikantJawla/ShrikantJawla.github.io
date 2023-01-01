import { useEffect, useState } from 'react'
import HamBurgerNav from './HamBurgerNav'
import Lottie from 'lottie-react'
import homeAnimation from '../93492-home-icon.json'
import skillsAnimation from '../115663-skills.json'
import projectsAnmation from '../91642-design-tools.json'
import contactsAimation from '../85620-contact.json'
import { v4 as uuidv4 } from 'uuid'

const navLinksWithScrollMapping = [
  {
    name: '_About',
    minPos: 0,
    maxPos: 599,
    link: 'about__part',
    anim: homeAnimation,
  },
  {
    name: '_Skills',
    minPos: 600,
    maxPos: 2599,
    link: 'skills__part',
    anim: skillsAnimation,
  },
  {
    name: '_Projects',
    minPos: 2600,
    maxPos: 3999,
    link: 'project__part',
    anim: projectsAnmation,
  },
  {
    name: '_Contacts',
    minPos: 4000,
    maxPos: 9000,
    link: 'contact__part',
    anim: contactsAimation,
  },
]

const Navbar = ({ scrollPosition }: { scrollPosition: number }) => {
  const [active, setActive] = useState<string>('#040506')
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => window.removeEventListener('scroll', stickNavbar)
  }, [])
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 56 ? setActive('#13151a') : setActive('#040506')
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
      <div className=" w-fit flex justify-center items-center space-x-3 ">
        {navLinksWithScrollMapping.map((item, ind) => (
          <div
            key={uuidv4()}
            className="w-[120px] hidden sm:flex space-x-0 flex justify-center items-center"
          >
            {scrollPosition <= item.maxPos && scrollPosition >= item.minPos && (
              <div className="w-[120px] ">
                <Lottie animationData={item.anim} />
              </div>
            )}
            <a
              href={`#${item.link}`}
              className={`nav_btn hidden sm:flex ${
                scrollPosition <= item.maxPos &&
                scrollPosition >= item.minPos &&
                'text-red-500 font-extrabold'
              } font-[FiraCode] text-white text-[20px]`}
              key={uuidv4()}
            >
              {item.name}
            </a>
          </div>
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
