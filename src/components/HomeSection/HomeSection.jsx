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

                    </div>

                    <div className='stats-container'>
                        {
                            statsData.map(item=>(
                                <div className='stats-info'>
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