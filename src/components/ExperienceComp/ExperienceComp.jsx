import './ExperienceComp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ExperienceComp({ year, desc, icon }) {
    return (
        <div className='experience-comp'>

            <div className='experience-left-column'>
                <div className='experience-comp-icon-container'>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className='experience-timeline-line' />
            </div>

            <div className='experience-year-and-desc'>
                <p className='year'>{year}</p>
                <p className='desc'>{desc}</p>
            </div>
        </div>
    )
}