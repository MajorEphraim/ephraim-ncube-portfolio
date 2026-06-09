import './SkillsSection.css'
import Header from '../Header/Header'
import TechComp from '../TechComp/TechComp'
import BlueButton from '../BlueButton/BlueButton'

//importing icons for frontend
import pic1 from '../../assets/icons/frontend/html5.svg'
import pic2 from '../../assets/icons/frontend/css_old.svg'
import pic3 from '../../assets/icons/frontend/javascript.svg'
import pic4 from '../../assets/icons/frontend/react_light.svg'
import pic5 from '../../assets/icons/frontend/tailwindcss.svg'

//importing icons for backend
import pic6 from '../../assets/icons/backend/csharp.svg'
import pic7 from '../../assets/icons/backend/dotnet.svg'
import pic8 from '../../assets/icons/backend/nodejs.svg'
import pic9 from '../../assets/icons/backend/expressjs_dark.svg'
import pic10 from '../../assets/icons/backend/fastapi.svg'

//importing icons for mobile
import pic11 from '../../assets/icons/mobile/react_dark.svg'
import pic12 from '../../assets/icons/mobile/expo_dark.svg'
import pic13 from '../../assets/icons/mobile/firebase.svg'
import pic14 from '../../assets/icons/mobile/android-icon.svg'
import pic15 from '../../assets/icons/mobile/apple_dark.svg'
 
//importing icons for database
import pic16 from '../../assets/icons/database/sql-server.svg'
import pic17 from '../../assets/icons/database/mysql-icon-dark.svg'

//importing icons for tools
import pic18 from '../../assets/icons/tools/git.svg'
import pic19 from '../../assets/icons/tools/github_dark.svg'
import pic20 from '../../assets/icons/tools/azure.svg'
import pic21 from '../../assets/icons/tools/vscode.svg'
import pic22 from '../../assets/icons/tools/postman.svg'

const skillsData = [
    {
        name:"Frontend", 
        skills:[
            {name:"HTML", pic:pic1}, 
            {name:"CSS", pic:pic2}, 
            {name:"JavaScript", pic:pic3}, 
            {name:"React", pic:pic4}, 
            {name:"Tailswind CSS",pic:pic5}
        ]
    },

    {
        name:"Backend",
        skills:[
            {name:"C#", pic:pic6}, 
            {name:"ASP.NET Core", pic:pic7}, 
            {name:"Node.js", pic:pic8}, 
            {name:"Express.js", pic:pic9}, 
            {name:"REST APIs",pic:pic10}]
    },

    {
        name:"Mobile", 
        skills:[
            {name:"React Native", pic:pic11}, 
            {name:"Expo", pic:pic12}, 
            {name:"Firebase", pic:pic13}, 
            {name:"Android Studio", pic:pic14}, 
            {name:"iOS Development",pic:pic15}]
    },

    {
        name:"Database", 
        skills:[
            {name:"SQL Server", pic:pic16}, 
            {name:"Firebase", pic:pic13}, 
            {name:"MySQL", pic:pic17}]
    },

    {
        name:"Tools & Others", 
        skills:[
            {name:"Git", pic:pic18}, 
            {name:"GitHub", pic:pic19}, 
            {name:"Azure", pic:pic20}, 
            {name:"VS Code", pic:pic21}, 
            {name:"Postman",pic:pic22}]
    }

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
                    <p>Always learning new technologies and improving my skills.</p>
                    <BlueButton name="View My Work (Code)"/>
                </div>

            </div>
        </section>
    )
    
}  