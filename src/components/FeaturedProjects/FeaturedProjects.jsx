import './FeaturedProjects.css'
import Header from '../Header/Header'
import BlueButton from '../BlueButton/BlueButton'
import TransparentIconButton from '../TransparentIconButton/TransparentIconButton'

//importing Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'

//importing all mockups
import hb_mockup from '../../assets/mockups/hb_mockup.png'
import ct_mockup from '../../assets/mockups/ct_mockup.png'
import g_mockup from '../../assets/mockups/g_mockup.png'

const projectsInfo = [
    {
        name:"HyBye", 
        mockup:hb_mockup, 
        desc:'A simple, real-time chat app. Users can quickly search for others, send friend requests, and start talking instantly through a modern interface.',
        skills:["React Native", "Firebase" ,"JavaScript"]
    },
    
     {
        name:"Globii", 
        mockup:g_mockup, 
        desc:'It connects people facing professional challenges with skilled experts. Users post tasks, and solvers provide timely solutions for financial rewards and recognition.',
        skills:["React Native", "Firebase" ,"JavaScript"]
    },
        
    {
        name:"Click Truckify",
        mockup:ct_mockup, 
        desc:'A South African marketplace connecting users with verified bakkie and truck owners. It digitizes vehicle hiring, eliminating social media hunting and blind negotiations.',
        skills:["React.js", "Firebase" ,"JavaScript"]
    },

      {
        name:"Click Truckify",
        mockup:ct_mockup, 
        desc:'A South African marketplace connecting users with verified bakkie and truck owners. It digitizes vehicle hiring, eliminating social media hunting and blind negotiations.',
        skills:["React.js", "Firebase" ,"JavaScript"]
    },
]

export default function FeaturedProjects() {
    return(
        <div className='featured-projects-section'>
            <div className='featured-projects-container'>
                <div className='header-and-btn'>
                    <Header title="Featured Projects" subtitle="Some of the things I've built"/>
                    <div className='btn view-all-code'>
                        <p>View all projects</p>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
                <div className='featured-projects-wrapper'>
                    {
                        projectsInfo.map(item=>(
                            <div key={item.name} className='project-comp'>
                                <div className='mockup-wrapper'>
                                    <img src={item.mockup}/>
                                </div>

                                <p className='project-name'>{item.name}</p>
                                <p className='project-desc'>{item.desc}</p>
                                
                                <div className='skills'>
                                    {
                                        item.skills.map(skill=><p key={skill}>{skill}</p>)
                                    }
                                </div>

                                <div className='action-btns'>
                                    <div className='btn'>
                                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                                        <p>Demo</p>
                                    </div>
                                    <div className='btn view-code'>
                                        <FontAwesomeIcon icon={faGithub}/>
                                        <p>GitHub</p>
                                    </div>
                                    
                                </div>
                            </div>
                        ))

                    }
                </div>
                <div className='projects-circles'>
                    {
                        projectsInfo.map(index=>(
                            <div className='circle'/>
                        ))
                    }
                </div>

            </div>  
        </div>
    )
} 