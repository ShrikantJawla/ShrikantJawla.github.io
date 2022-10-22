import React from 'react'
import Navbar from './Navbar'
import { useScroll } from 'framer-motion'
import ConnectLinks from './HomePageComponents/ConnectLinks'
import AllProjects from './projectComponents/AllProjects'
import LandingPage from './HomePageComponents/LandingPage'
import AboutMe from './HomePageComponents/AboutMe'
import ContactMe from './ContactMe'
import Skills from './Skills'


function HomePage() {
  const { scrollY } = useScroll()
  const [linksposition, setlinkposition] = React.useState({
    top: '28px',
    left: '45vw',
  })
  const [scrollpos, setscrollpos] = React.useState(0)
  scrollY.onChange((pos) => {
    if (pos <= 100) {
      setlinkposition({ top: '28px', left: '45vw' })
      setscrollpos(0)
    } else {
      setlinkposition({ top: '40vh', left: '1%' })
      setscrollpos(100)
    }
  })

  const linksDir = {
    position: scrollpos === 0 ? 'row' : 'column',
  }
  return (
    <>
      <Navbar />
      <ConnectLinks linksDir={linksDir} linksposition={linksposition} />
      <LandingPage />
      <AboutMe />
      <Skills />
      <AllProjects />
      <ContactMe />
    </>
  )
}

export default HomePage
