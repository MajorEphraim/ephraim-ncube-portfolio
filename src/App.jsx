import { useState } from 'react'
import './App.css'
import HomeSection from './components/HomeSection/HomeSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'

function App() {

  return (
    <div className='main-container'>
      <HomeSection/>
      <ExperienceSection/>
    </div>  
  )
}

export default App
