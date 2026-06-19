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

  //downloads cv from firebase storage
  const downloadCV = () => {
    window.open(
        'https://firebasestorage.googleapis.com/v0/b/ephraim-ncube-portfolio.firebasestorage.app/o/documents%2FJunior_Ephraim_Ncube_Resume.pdf?alt=media&token=bf57f3d9-4adf-42db-af3a-62c058e3a8b4',
        '_blank'
    );
   };   

  return (
    <div className='main-container'>
      <Drawer isOpen={isOpen} activeLink={activeLink} onClose={()=>setIsOpen(false)}/>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} setIsOpen={setIsOpen} downloadCV={downloadCV}/>  
      <HomeSection downloadCV={downloadCV}/>
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
