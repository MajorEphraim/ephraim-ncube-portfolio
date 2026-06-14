import './NavBar.css'
import NameComp from '../NameComp/NameComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function NavBar() { 
    return (
        <nav className='nav-bar-wrapper'>
            <div className='nav-bar'>
                <NameComp />

                <ul className='nav-menu'>
                    <li><a className='nav-link active' href='#home'>Home</a></li>
                    <li><a className='nav-link' href='#projects'>Projects</a></li>
                    <li><a className='nav-link' href='#skills'>Skills</a></li>
                    <li><a className='nav-link' href='#experience'>Experience</a></li>
                    <li><a className='nav-link' href='#contact'>Contact</a></li>
                </ul>
                <div className='menu-bar-container'>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <button className='download-btn'>Download CV</button> 
            </div>
        </nav>
    )
}