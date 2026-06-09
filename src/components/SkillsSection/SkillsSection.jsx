import './SkillsSection.css'
import Header from '../Header/Header'
import TechComp from '../TechComp/TechComp'

const skillsData = [
    {name:"Frontend", skills:[{name:"HTML", pic:""}, {name:"CSS", pic:""}, {name:"JavaScript", pic:""}, {name:"React", pic:""}, {name:"Tailswind CSS",pic:""}]},
    {name:"Backend", skills:[{name:"C#", pic:""}, {name:"ASP.NET Core", pic:""}, {name:"Node.js", pic:""}, {name:"Express.js", pic:""}, {name:"REST APIs",pic:""}]},
    {name:"Mobile", skills:[{name:"React Native", pic:""}, {name:"Expo", pic:""}, {name:"Firebase", pic:""}, {name:"Android Studio", pic:""}, {name:"iOS Development",pic:""}]},
    {name:"Database", skills:[{name:"SQL Server", pic:""}, {name:"Firebase", pic:""}, {name:"MySQL", pic:""}]},
    {name:"Tools & Others", skills:[{name:"Git", pic:""}, {name:"GitHub", pic:""}, {name:"Azure", pic:""}, {name:"VS Code", pic:""}, {name:"Postman",pic:""}]},
]

export default function SkillsSection() {
    return(
        <section className='skills-section' id='skills'>
            <div className='skills-container'>
                <Header title="My Skills" subtitle="Technologies I work with"/>
                <div className='all-tech-cards'>
                    {
                        skillsData.map((item,index)=>(
                            <TechComp key={item.name} name={item.name} skills={item.skills}/>
                        ))
                    }

                </div>
                <div className='text-and-button'>

                </div>

            </div>
        </section>
    )
    
}  