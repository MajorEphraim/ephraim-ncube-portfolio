import { useState, useRef } from 'react' // Added useRef here
import './FeaturedProjects.css'
import Header from '../Header/Header'
import BlueButton from '../BlueButton/BlueButton'
import TransparentIconButton from '../TransparentIconButton/TransparentIconButton'
import VideoModal from '../VideoModal/VideoModal'

//importing Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'

//importing all mockups
import hb_mockup from '../../assets/mockups/hb_mockup.png'
import ct_mockup from '../../assets/mockups/ct_mockup.png'
import g_mockup from '../../assets/mockups/g_mockup.png'
import ms_mockup from '../../assets/mockups/ms_mockup.png'
import im_mockup from '../../assets/mockups/im_mockup.png'

const projectsInfo = [
    {
        name:"HiBye", 
        mockup:hb_mockup, 
        desc:'A simple, real-time chat app. Users can quickly search for others, send friend requests, and start talking instantly through a modern interface.',
        skills:["React Native", "Firebase" ,"Expo"],
        repo:'https://github.com/MajorEphraim/hibye',
        demo:'https://firebasestorage.googleapis.com/v0/b/ephraim-ncube-portfolio.firebasestorage.app/o/Portfolio%20videos%2Fhibye_video.mp4?alt=media&token=18a8a6b9-03fe-4ba6-aa45-485be641eedd'
    },
    
     {
        name:"Globii", 
        mockup:g_mockup, 
        desc:'It connects people facing professional challenges with skilled experts. Users post tasks, and solvers provide timely solutions for financial rewards and recognition.',
        skills:["React Native", "Firebase" ,"JavaScript"],
        repo:'https://github.com/MajorEphraim/globii',
        demo:'https://firebasestorage.googleapis.com/v0/b/ephraim-ncube-portfolio.firebasestorage.app/o/Portfolio%20videos%2Fglobii_video.mp4?alt=media&token=685d2025-391f-4895-9d94-2ff9ba97f7f3'

    },
        
    {
        name:"MyndStake",
        mockup:ms_mockup, 
        desc:'A quiz gaming platform that gives you a chance to compete in your favorite topic with other users of similar interest and reward you the amount when you got to first place.',
        skills:["Expo","React Native", "Firebase"],
        repo:'https://github.com/MajorEphraim/myndstake',
        demo:'https://firebasestorage.googleapis.com/v0/b/ephraim-ncube-portfolio.firebasestorage.app/o/Portfolio%20videos%2Fmyndstake_video.mp4?alt=media&token=75cc50a9-2e3f-4408-8e56-8ebed733e812'
    },

     {
        name:"Inventory Manager",
        mockup:im_mockup, 
        desc:'a desktop inventory management application built for small businesses to manage products, monitor stock levels, track inventory value, and identify low-stock items. The system provides a modern dashboard with real-time inventory metrics, product management features (Create, Read, Update, Delete), and local database storage for efficient inventory tracking and decision-making.',
        skills:["C#",".NET", "SQLite"],
        repo:'https://github.com/MajorEphraim/LocalInventoryManager',
        demo:'https://firebasestorage.googleapis.com/v0/b/ephraim-ncube-portfolio.firebasestorage.app/o/Portfolio%20videos%2Fdashboard_video.mp4?alt=media&token=1b041dc5-286c-4bc3-a95d-f2041a095860',
        size:"Big"

    },

      {
        name:"Click Truckify",
        mockup:ct_mockup, 
        desc:'A South African marketplace connecting users with verified bakkie and truck owners. It digitizes vehicle hiring, eliminating social media hunting and blind negotiations.',
        skills:["React.js", "Firebase" ,"Node.js"],
        repo:'https://github.com/MajorEphraim/click-truckify',
        demo:'https://firebasestorage.googleapis.com/v0/b/ephraim-ncube-portfolio.firebasestorage.app/o/Portfolio%20videos%2Fclicktruckify_video.mp4?alt=media&token=5895b739-f68c-4fd3-aa1d-e63555b92746'

    },
]

export default function FeaturedProjects() {
    // State for active index
    const [activeIndex, setActiveIndex] = useState(0)
    
    const [open, setOpen] = useState(false)
    const [openedDemo, setOpenedDemo] = useState(null)
    const [openedSize, setOpenedSize] = useState(null)
    
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

    const openDemo = (demo,size=null)=>{
        setOpenedDemo(demo)
        setOpenedSize(size)
        setOpen(true)
    }

    return(
        <div className='featured-projects-section'>
            <div className='featured-projects-container'>
                <div className='header-and-btn'>
                    <Header title="Featured Projects" subtitle="Some of the things I've built"/>
                    <div className='btn view-all-code' onClick={()=>window.location.href='https://github.com/MajorEphraim?tab=repositories'}>
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
                                    <div className='btn' onClick={()=>openDemo(item.demo, item.size)}>
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
            <VideoModal open={open} setOpen={setOpen} demo={openedDemo} size={openedSize}/>
        </div>
    )
}