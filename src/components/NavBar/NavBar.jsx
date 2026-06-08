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
                <li><a className='nav-link active' href='#home'>Home</a></li>
                <li><a className='nav-link' href='#projects'>Projects</a></li>
                <li><a className='nav-link' href='#skills'>Skills</a></li>
                <li><a className='nav-link' href='#experience'>Experience</a></li>
                <li><a className='nav-link' href='#contact'>Contact</a></li>
            </ul>

            <button className='downloaf-btn'>Download CV</button>
        </nav>
    )
}   