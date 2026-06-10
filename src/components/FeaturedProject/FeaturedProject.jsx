import './FeaturedProject.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mockup from '../../assets/mockups/ct_multiple_mockup.png'

const feauturesList = [
    "Driver App", "Client Portal", "Fleet Dashboard", "Fleet Dashboard", "Route Optimization"
]

export default function FeaturedProject() {
    return(
        <div className='featured-project-section'>
            <div className='featured-project-container'>
                <div className='featured-project-text-and-icon'>
                    <FontAwesomeIcon icon={faStar}/>
                    <p>Featured Project Click Truckify</p>
                </div>
                <div className='feautured-project-content'>
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
                                    <div className='key-feature-comp'>
                                        <div>

                                        </div>
                                        <p>{item}</p>
                                    </div>
                                ))
                            }

                        </div>
                       
                    </div>

                    <div className='featured-project-tech-stack'>
                       
                    </div>

                    <div className='featured-project-buttons'>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}     