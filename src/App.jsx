import { useState } from 'react'
import './App.css'
import HomeSection from './components/HomeSection/HomeSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import ContactSection from './components/ContactSection/ContactSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import FeaturedProject from './components/FeaturedProject/FeaturedProject'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'

function App() {
  return (
    <div className='main-container'>
      <HomeSection/>
      <ExperienceSection/>
      <section className='projects-section' id='projects'>
        <FeaturedProject/>
        <FeaturedProjects/>
      </section>
      <SkillsSection/>
      <ContactSection/>
    </div>  
  )
}

export default App
