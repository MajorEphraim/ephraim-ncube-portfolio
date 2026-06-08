import './NavBar.css'

export default function NavBar(params) {
    return (
        <nav className='nav-bar'>
            <div className='initials-and-names'>
                <div className='initials'>
                    <p>ETN</p>
                </div>
                <p>Ephraim T Ncube</p>
            </div>

            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>

            <button className='downloaf-btn'>Download CV</button>
        </nav>
    )
} 