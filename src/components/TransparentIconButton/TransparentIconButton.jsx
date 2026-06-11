import './TransparentIconButton.css'

//importing Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

export default function TransparentIconButton() {
    return(
        <div className='trans-btn'>
            <FontAwesomeIcon icon={faGithub}/>
            <p>View Code (GitHub)</p>
        </div>
    )
}