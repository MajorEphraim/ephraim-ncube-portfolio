import './Footer.css'
import NameComp from '../NameComp/NameComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const links = ["Home", "Projects", "Skills", "Experience", "Contact"]

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Row 1: Brand, Nav links centered, and Icons on the right */}
      <div className='upper-part'>
        <div className='brand-wrapper'>
          <NameComp />
        </div>
        
        <ul className='nav-links'>
          {links.map(name => <li key={name}><a href={"#"+name.toLowerCase()}>{name}</a></li>)}
        </ul> 

        <div className='contact-icons'>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:your-email@example.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      {/* Row 2: Developer title and copyright combined and centered */}
      <div className='lower-part'>
        <p className='co-operation-text'>
          Full Stack Developer &middot; &copy; {new Date().getFullYear()} Ephraim Ncube &middot; All rights reserved.
        </p>
      </div>
    </footer>
  )   
}