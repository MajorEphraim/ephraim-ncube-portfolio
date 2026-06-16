import './CloseButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function CloseButton({handleClick}) {
    return(
        <div className='close-btn' onClick={()=>handleClick()}>
           <FontAwesomeIcon icon={faX}/>
        </div>
    )
}