import { useState } from 'react'
import './App.css'
import HomeSection from './components/HomeSection/HomeSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import ContactSection from './components/ContactSection/ContactSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import FeaturedProject from './components/FeaturedProject/FeaturedProject'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Drawer from './components/Drawer/Drawer'

function App() {
      //state to control the active tab
  const [activeLink, setActiveLink] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='main-container'>
      <Drawer isOpen={isOpen} activeLink={activeLink} onClose={()=>setIsOpen(false)}/>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} setIsOpen={setIsOpen}/>  
      <HomeSection/>
      <ExperienceSection/>
      <section className='projects-section' id='projects'>
        <FeaturedProject/>
        <FeaturedProjects/>
      </section>
      <SkillsSection/>
      <ContactSection/>
      <Footer/>
    </div>  
  )  
}    

export default App
