import { useState, useRef } from 'react' // Added useRef here
import './FeaturedProjects.css'
import Header from '../Header/Header'
import BlueButton from '../BlueButton/BlueButton'
import TransparentIconButton from '../TransparentIconButton/TransparentIconButton'

//importing Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'

//importing all mockups
import hb_mockup from '../../assets/mockups/hb_mockup.png'
import ct_mockup from '../../assets/mockups/ct_mockup.png'
import g_mockup from '../../assets/mockups/g_mockup.png'
import ms_mockup from '../../assets/mockups/ms_mockup.png'

const projectsInfo = [
    {
        name:"HiBye", 
        mockup:hb_mockup, 
        desc:'A simple, real-time chat app. Users can quickly search for others, send friend requests, and start talking instantly through a modern interface.',
        skills:["React Native", "Firebase" ,"Expo"],
        repo:'https://github.com/MajorEphraim/hibye'
    },
    
     {
        name:"Globii", 
        mockup:g_mockup, 
        desc:'It connects people facing professional challenges with skilled experts. Users post tasks, and solvers provide timely solutions for financial rewards and recognition.',
        skills:["React Native", "Firebase" ,"JavaScript"],
        repo:'https://github.com/MajorEphraim/globii'
    },
        
    {
        name:"MyndStake",
        mockup:ms_mockup, 
        desc:'A quiz gaming platform that gives you a chance to compete in your favorite topic with other users of similar interest and reward you the amount when you got to first place.',
        skills:["Expo","React Native", "Firebase"],
        repo:'https://github.com/MajorEphraim/myndstake'
    },

      {
        name:"Click Truckify",
        mockup:ct_mockup, 
        desc:'A South African marketplace connecting users with verified bakkie and truck owners. It digitizes vehicle hiring, eliminating social media hunting and blind negotiations.',
        skills:["React.js", "Firebase" ,"Node.js"],
        repo:'https://github.com/MajorEphraim/click-truckify'
    },
]

export default function FeaturedProjects() {
    // State for active index
    const [activeIndex, setActiveIndex] = useState(0)
    
    // Ref to track the scrollable container wrapper
    const wrapperRef = useRef(null)

    // Dynamic mathematical evaluation for when a user scrolls manually or swipes
    const handleScroll = () => {
        if (!wrapperRef.current) return;

        const { scrollLeft, clientWidth, scrollWidth } = wrapperRef.current;
        const totalScrollable = scrollWidth - clientWidth;
        
        // Safety guard: Prevents edge cases and division by zero
        if (totalScrollable <= 0 || projectsInfo.length <= 1) {
            setActiveIndex(0);
            return;
        }

        const totalCards = projectsInfo.length;
        const newIndex = Math.round((scrollLeft / totalScrollable) * (totalCards - 1));
        
        setActiveIndex(newIndex);
    };

    // Handler to execute smooth automated scrolling when a dot is clicked
    const handleDotClick = (index) => {
        if (wrapperRef.current && projectsInfo.length > 1) {
            const { clientWidth, scrollWidth } = wrapperRef.current;
            const totalScrollable = scrollWidth - clientWidth;
            
            const scrollToPosition = (index / (projectsInfo.length - 1)) * totalScrollable;
            
            wrapperRef.current.scrollTo({
                left: scrollToPosition,
                behavior: 'smooth'
            });
        }
    };

    return(
        <div className='featured-projects-section'>
            <div className='featured-projects-container'>
                <div className='header-and-btn'>
                    <Header title="Featured Projects" subtitle="Some of the things I've built"/>
                    <div className='btn view-all-code'>
                        <p>View all projects</p>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
                
                {/* Wired up wrapperRef and handleScroll listener below */}
                <div 
                    className='featured-projects-wrapper'
                    ref={wrapperRef}
                    onScroll={handleScroll}
                >
                    {
                        projectsInfo.map(item=>(
                            <div key={item.name} className='project-comp'>
                                <div className='mockup-wrapper'>
                                    <img src={item.mockup} alt={item.name}/>
                                </div>

                                <p className='project-name'>{item.name}</p>
                                <p className='project-desc'>{item.desc}</p>
                                
                                <div className='skills'>
                                    {
                                        item.skills.map(skill=><p key={skill}>{skill}</p>)
                                    }
                                    <p>etc</p>
                                </div>

                                <div className='action-btns'>
                                    <div className='btn'>
                                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                                        <p>Demo</p>
                                    </div>
                                    <div className='btn view-code' onClick={()=>window.location.href=item.repo}>
                                        <FontAwesomeIcon icon={faGithub}/>
                                        <p>GitHub</p>
                                    </div>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                <div className='projects-circles'>
                    {
                        projectsInfo.map((item, index)=>(
                            <div 
                                key={item.name} 
                                className={`circle${activeIndex === index ? ' solid' : ''}`}
                                onClick={() => handleDotClick(index)}
                                style={{ cursor: 'pointer' }}
                            />
                        ))
                    }
                </div>

            </div>  
        </div>
    )
}