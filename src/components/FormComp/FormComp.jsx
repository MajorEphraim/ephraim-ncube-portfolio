import './FormComp.css'
import BlueButton from '../BlueButton/BlueButton'

export default function FormComp() {
    return(
        <form>
            <div className='dual-inputs'>
                <input placeholder='Your Name'/>
                <input placeholder='Your Email'/>
            </div>
            <input placeholder='Subject'/>
            <textarea placeholder='Your Message'>

            </textarea>
            <BlueButton name="Send Message"/>
        </form>
    )
}