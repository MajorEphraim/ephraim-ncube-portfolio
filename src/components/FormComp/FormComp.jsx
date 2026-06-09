import './FormComp.css'

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
        </form>
    )
}