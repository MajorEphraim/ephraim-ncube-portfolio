import './NavBar.css'
import NameComp from '../NameComp/NameComp'

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

                <button className='download-btn'>Download CV</button> 
            </div>
        </nav>
    )
}