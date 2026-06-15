import './NavBar.css'
import NameComp from '../NameComp/NameComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
export default function NavBar() { 
    //state to control the active tab
    const [activeLink, setActiveLink] = useState('home')

    useEffect(()=>{
        const sections = document.querySelectorAll('section') // select all section tags

        const observationOptions ={
            root:null,
            rootMargin:'-30% 0px -70px 0px', //when section hits upper middle of screen it triggers
            threshold:0
        }

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setActiveLink(entry.target.id)
                }
            })
        }, observationOptions)

        sections.forEach(section => observer.observe(section))

        return ()=> observer.disconnect()
    },[])

    return (
        <nav className='nav-bar-wrapper'>
            <div className='nav-bar'>
                <NameComp />

                <ul className='nav-menu'>
                    <li><a className={`nav-link${activeLink === 'home' ? ' active':''}`} href='#home' onClick={()=>setActiveLink("home")}>Home</a></li>
                    <li><a className={`nav-link${activeLink === 'experience' ? ' active':''}`} href='#experience' onClick={()=>setActiveLink("experience")}>Experience</a></li>
                    <li><a className={`nav-link${activeLink === 'projects' ? ' active':''}`} href='#projects' onClick={()=>setActiveLink("projects")}>Projects</a></li>
                    <li><a className={`nav-link${activeLink === 'skills' ? ' active':''}`} href='#skills' onClick={()=>setActiveLink("skills")}>Skills</a></li>
                    <li><a className={`nav-link${activeLink === 'contact' ? ' active':''}`} href='#contact'onClick={()=>setActiveLink("contact")}>Contact</a></li>
                </ul>
                <div className='menu-bar-container'>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <button className='download-btn'>Download CV</button> 
            </div>
        </nav>
    )
}