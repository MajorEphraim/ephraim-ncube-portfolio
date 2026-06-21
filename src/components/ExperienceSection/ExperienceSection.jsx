import './ExperienceSection.css'
import pic from '../../assets/tec.png'
import Header from '../Header/Header'
import ExperienceComp from '../ExperienceComp/ExperienceComp'

import { 
  faCode, 
  faLaptopCode, 
  faMobileAlt, 
  faGraduationCap, 
  faDice, 
  faRocket 
} from '@fortawesome/free-solid-svg-icons';

export const timelineData = [
  {
    year: "2020 – 2021",
    desc: "Started self-study on YouTube, focusing on React and Firebase. Co-developed and published my first production app.",
    icon: faCode
  },
  {
    year: "2022",
    desc: "Enrolled for a BSc in IT. Joined Geekculcha and accelerated my portfolio by building PicPica and Globii.",
    icon: faLaptopCode
  },
  {
    year: "2023",
    desc: "Completed production on Globii app. Built Metro app, mastering advanced cross-platform mobile layouts.",
    icon: faMobileAlt
  },
  {
    year: "2024",
    desc: "Final academic year. Appointed as University Lecturer Assistant. Engineered HiBye app with optimized messaging.",
    icon: faGraduationCap
  },
  {
    year: "2025",
    desc: "Co-founded a digital startup with 6 directors. Developed a fully compliant mobile gaming application called MyndStake.",
    icon: faDice
  },
  {
    year: "2026",
    desc: "Lead Full-Stack Developer for Click Truckify. Optimized APIs to slash operational production cloud costs by 80%.",
    icon: faRocket
  }
];

// const experienceData = [
//     {year:"2020", desc:"Started self-study on You"},
//     {year:"2021", desc:"Built my first mobile, established partnership, and built projects for other companies"},
//     {year:"2022", desc:"University projects and software development"},
//     {year:"2023", desc:"Build mobile apps using React Native"},
//     {year:"2024+", desc:"Full Stack Development and Cloud Technologies"}
// ]

export default function ExperienceSection() {
    return(
        <section className='experience-section' id='experience'>
            <div className='experience-container'>
                <Header title="My Experience" subtitle="My journey as a developer"/>
                <div className='timeline-and-pic'>
                    <div className='experince-timeline'>
                        {
                            timelineData.map(item=><ExperienceComp key={item.year} year={item.year} desc={item.desc} icon={item.icon}/>)
                        }

                    </div>
                    <img src={pic} className='exp-pic'/>
                </div>

            </div>
        </section>
    )
} 