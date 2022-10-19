import React from 'react'
import FIrstFullPageAnimation from './FIrstFullPageAnimation'
import Intro from './HomePageComponents/Intro'
import Navbar from './Navbar'
import { useScroll } from 'framer-motion'
import ConnectLinks from './HomePageComponents/ConnectLinks'
import AllProjects from './projectComponents/AllProjects'

const bgColor = '#fefffe'
const footerColor = '#f4f5f6'
const secondbgColor = '#f4f5f6'

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
      {/* <FIrstFullPageAnimation /> */}
      <Intro />
      <AllProjects />
    </>
  )
}

export default HomePage
