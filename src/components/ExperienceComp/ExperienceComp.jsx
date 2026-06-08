import './ExperienceComp.css'

export default function ExperienceComp({year, desc}) {
    return (
        <div className='experience-comp'>
            <div className='experience-comp-icon-container'>

            </div>

            <div className='line-and-dot-container'>
                <div className='experience-comp-dot'/>
            </div>

            <div className='experience-year-and-desc'>
                <p className='year'>{year}</p>
                <p className='desc'>{desc}</p>
            </div>
        </div>
    )
}