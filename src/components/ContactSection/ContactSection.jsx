import './ContactSection.css'
import Header from '../Header/Header'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormComp from '../FormComp/FormComp'

const contactData = [
    {method:'Email', value:'Ephraim.apply@gmail.com', icon:faEnvelope},
    {method:'Phone', value:'068 082 1897', icon:faPhone},
    {method:'Location', value:'Gauteng, South Africa', icon:faLocationDot},
    {method:'GitHub', value:'github.com/MajorEphraim', icon:faGithub},
    {method:'LinkedIn', value:'linkedin.com/in/ephraim-ncube-534b48217', icon:faLinkedin}

]
 
export default function ContactSection() {
    return(
        <section className='contact-section' id='contact'>
            <div className='contact-container'>
                <Header title="Get In Touch" subtitle="Lets's build something amazing together"/>
                <div className='contact-methods'>
                    <div className='contact-info'>
                        {
                            contactData.map((item, index)=>(
                                <div className='contact-comp'>
                                    <div className={`contact-icon-wrapper${index%2 === 0 ? "":" dark"}`}>
                                        <FontAwesomeIcon icon={item.icon}/>
                                    </div>

                                    <div>
                                        <p className='contact-method'>{item.method}</p>
                                        <p className='contact-value'>{item.value}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='contact-form'>
                        <FormComp/>
                    </div>
                </div>

            </div>
        </section>
    )
} 