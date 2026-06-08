import './HomeSection.css'
import NavBar from '../NavBar/NavBar'

const statsData = [
    {title:"Projects Completed", value:11},
    {title:"Years Coding", value:7},
    {title:"Developer", value:"Full Stack"},
    {title:"Specialist", value:"Mobile & Web"},
]

export default function HomeSection() {
    return(
        <section className='home-section'>
            <div className='section-container'>
                <NavBar/>
                <div className='home-content'>
                    <div className='info-and-pic'>
                        <div className='professional-info'>
                            <p className='home-greeting'>Hi, I am</p>
                            <p className='firstname-and-lastname'>Ephraim <span>Ncube</span></p>
                            <p className='professional-title'>Full-Stack Developer</p>
                            <p className='professional-description'>I build modern web and mobile applications that solves real-world problems. I specialize in JavaScript, React, React Native, .NET, SQL, and Firebase (NoSql).
                             </p>
                        </div>
                        
                        <div className='pic-and-icons'>

                        </div>

                    </div>

                    <div className='home-buttons'>
                        <button className='home-work-btn'>View My Work</button>
                        <button className='home-cv-btn'>Download CV</button>
                    </div>

                    <div className='stats-container'>
                        {
                            statsData.map((item, index)=>(
                                <div className={index < 3 ?'stats-info':'stats-info-last'}>
                                    <p className='stats-value'>{item.value}</p>
                                    <p className='stats-title'>{item.title}</p>
                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>
        </section>
    )
}