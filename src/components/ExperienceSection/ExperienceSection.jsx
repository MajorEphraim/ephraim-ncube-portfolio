import './ExperienceSection.css'
import pic from '../../assets/tec.png'
import Header from '../Header/Header'
import ExperienceComp from '../ExperienceComp/ExperienceComp'

const experienceData = [
    {year:"2020", desc:"Started learning JavaScript and Web Development"},
    {year:"2021", desc:"Built my first mobile, established partnership, and built projects for other companies"},
    {year:"2022", desc:"University projects and software development"},
    {year:"2023", desc:"Build mobile apps using React Native"},
    {year:"2024+", desc:"Full Stack Development and Cloud Technologies"}
]

export default function ExperienceSection() {
    return(
        <section className='experience-section' id='experience'>
            <div className='experience-container'>
                <Header title="My Experience" subtitle="My journey as a developer"/>
                <div className='timeline-and-pic'>
                    <div className='experince-timeline'>
                        {
                            experienceData.map(item=><ExperienceComp key={item.year} year={item.year} desc={item.desc}/>)
                        }

                    </div>
                    <img src={pic} className='exp-pic'/>
                </div>

            </div>
        </section>
    )
} 