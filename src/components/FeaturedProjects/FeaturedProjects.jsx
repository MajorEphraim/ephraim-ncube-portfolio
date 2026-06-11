import './FeaturedProjects.css'
import Header from '../Header/Header'
import BlueButton from '../BlueButton/BlueButton'
import TransparentIconButton from '../TransparentIconButton/TransparentIconButton'

//importing Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

//importing all mockups
import hb_mockup from '../../assets/mockups/hb_mockup.png'
import ct_mockup from '../../assets/mockups/ct_mockup.png'

const projectsInfo = [
    {
        name:"HyBye", 
        mockup:hb_mockup, 
        desc:'HiBye is a simple, efficient app for seamless, real-time communication. Users can quickly search for others, connect via friend requests, and start chatting instantly through an intuitive, modern interface.',
        skills:["React Native", "Firebase" ,"JavaScript"]
    },
    
     {
        name:"HyBye", 
        mockup:hb_mockup, 
        desc:'HiBye is a simple, efficient app for seamless, real-time communication. Users can quickly search for others, connect via friend requests, and start chatting instantly through an intuitive, modern interface.',
        skills:["React Native", "Firebase" ,"JavaScript"]
    },
        
    {
        name:"HyBye",
        mockup:hb_mockup, 
        desc:'HiBye is a simple, efficient app for seamless, real-time communication. Users can quickly search for others, connect via friend requests, and start chatting instantly through an intuitive, modern interface.',
        skills:["React Native", "Firebase" ,"JavaScript"]
    },
]

export default function FeaturedProjects() {
    return(
        <div className='featured-projects-section'>
            <div className='featured-projects-container'>
                <Header title="Featured Projects" subtitle="Some of the things I've built"/>
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

            </div>  
        </div>
    )
} 