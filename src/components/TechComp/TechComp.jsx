import './TechComp.css'

export default function TechComp({name, skills}) {
    return(
        <div className='tech-comp'>
            <p className='tech-name'>{name}</p>
            <div>
                {
                    skills.map(item=>(
                        <div className='skill-pic-and-name' key={item.name}>
                            <p className='tech-skill-name'>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    
}  