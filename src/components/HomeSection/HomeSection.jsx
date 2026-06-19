import './HomeSection.css'
import NavBar from '../NavBar/NavBar'
import pic from '../../assets/pic.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUser } from '@fortawesome/free-solid-svg-icons';
  
const statsData = [
    {title:"Projects Completed", value:"10+"},
    {title:"Years Coding", value:7},
    {title:"Developer", value:"Full Stack"},
    {title:"Specialist", value:"Mobile & Web"},
] 
 
export default function HomeSection({downloadCV}) {
    return(
        <section className='home-section' id='home'>
            <div className='section-container'>
                {/* <div className='home-content'> */}
                    <div className='info-and-pic'>
                        <div className='professional-info'>
                            <p className='home-greeting'>Hi, I am</p>
                            <p className='firstname-and-lastname'>Ephraim <span className='info-lastname'>Ncube</span></p>
                            <p className='professional-title'>Full-Stack Developer</p>
                            <p className='professional-description'>I build modern web and mobile applications that solves real-world problems. I specialize in JavaScript, React, React Native, .NET, SQL, and Firebase (NoSql).</p>
                        </div>

                        <div className='pic-side'>
                            <div className='pic-and-icons'>
                                <a href='#contact'>
                                    <div className='contact-icon-container'>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                </a>

                                <img src={pic}/>
                                <a href='https://github.com/MajorEphraim/ephraim-ncube-portfolio'>
                                    <div className='code-icon-container'>
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                </a>
                            </div>
                        </div>
                        

                    </div>

                    <div className='home-buttons'>
                        <button className='home-work-btn' onClick={()=>window.location.href='https://github.com/MajorEphraim'}>View My Work</button>
                        <button className='home-cv-btn' onClick={()=>downloadCV()}>Download CV</button>
                    </div>

                    <div className='stats-container'>
                        {
                            statsData.map((item, index)=>(
                                <div key={item.title} className={index < 3 ?'stats-info':'stats-info-last'}>
                                    <p className='stats-value'>{item.value}</p>
                                    <p className='stats-title'>{item.title}</p>
                                </div>
                            ))
                        }

                    </div>
{/* 
                </div> */}

            </div>
        </section>
    )
}