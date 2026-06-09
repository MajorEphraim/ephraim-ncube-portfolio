import { useState } from 'react'
import './App.css'
import HomeSection from './components/HomeSection/HomeSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import ContactSection from './components/ContactSection/ContactSection'

function App() {

  return (
    <div className='main-container'>
      <HomeSection/>
      <ExperienceSection/>
      <ContactSection/>
    </div>  
  )
}

export default App
