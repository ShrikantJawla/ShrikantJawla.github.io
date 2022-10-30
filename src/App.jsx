import { useEffect, useState } from 'react'
import './App.css'
import NewImg from './components/NewImg'
import Sidebar from './components/Sidebar'
import About from './pages/about/About'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <>
      <Sidebar />
      {loading && <NewImg />}
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  )
}

export default App
