import { useState } from 'react'
import './App.css'
import HomeSection from './components/HomeSection/HomeSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import ContactSection from './components/ContactSection/ContactSection'
import SkillsSection from './components/SkillsSection/SkillsSection'

function App() {

  return (
    <div className='main-container'>
      <HomeSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <ContactSection/>
    </div>  
  )
}

export default App
