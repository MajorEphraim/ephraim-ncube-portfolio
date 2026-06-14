import './FeaturedProject.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faStar, faCheck, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mockup from '../../assets/mockups/ct_multiple_mockup.png'

const feauturesList = [
    "Real-Time Vehicle Booking & Matching", "Live Bidding", "Instant Communication Layer", "Driver & Fleet Management", "Dynamic Transaction Management"
]

const skillsList = [
    "React", "Firebase", "Node.js", "HTML", "CSS"
]

export default function FeaturedProject() {
    return(
        <div className='featured-project-section'>
            <div className='featured-project-container'>
                <div className='featured-project-text-and-icon'>
                    <FontAwesomeIcon icon={faStar}/>
                    <p>Featured Project Click Truckify</p>
                </div>
                <div className='featured-project-content'>
                    <div className='project-title-and-subtitle'>
                        <p className='project-title'>Click Truckify</p>
                        <p className='project-subtitle'>Connecting Drivers to Commercial Shipments</p>
                    </div>

                    <img className='mockup' src={mockup}/>

                     <div className='featured-project-about'>
                        <p className='about-project-title'>About the Project</p>
                        <p className='about-project-info'>Online transport and logistics marketplace in South Africa that connects individuals and businesses with verified bakkie and truck owners. It digitizes the process of hiring moving vehicles, eliminating the need to search through social media groups, wait for callbacks, or negotiate quotes blindly</p>
                    </div>

                     <div className='featured-project-key-feautures'>
                        <p className='feautured-project-title'>Key Features</p>
                        <div className='list-of-features'>
                            {
                                feauturesList.map(item=>(
                                    <div key={item} className='key-feature-comp'>
                                        <div>
                                            <FontAwesomeIcon icon={faCheck}/>
                                        </div>
                                        <p>{item}</p>
                                    </div>
                                ))
                            }

                        </div>
                       
                    </div> 
                    
                    <div className='project-tech-stack-and-buttons'>
                        <div className='featured-project-tech-stack'>
                        <p className='tech-stack-title'>Tech Stack</p>
                        <div>
                            {
                                skillsList.map(item=><p key={item}>{item}</p>)
                            }
                            <p>etc</p>
                        </div>
                        </div>

                        <div className='featured-project-buttons'>
                            <div className='btn'>
                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                                <p>Live Demo</p>
                            </div>
                            <div className='btn view-code'>
                                    <FontAwesomeIcon icon={faGithub}/>
                                    <p>View Code (GitHub)</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}       