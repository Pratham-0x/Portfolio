import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import Navbar from './components/navbar/navbar'
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Particles from './components/particles/particles'
import Links from './components/links/links'
import Contact from './components/contact/contact'

gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <>
      <Particles />
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      <Links />
    </>
  )
}

export default App
