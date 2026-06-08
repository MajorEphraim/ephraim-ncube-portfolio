import './Header.css'

export default function Header({title, subtitle}) {
    return(
        <div className='section-header'>
            <p className='header-title'>{title}</p>
            <p className='header-subtitle'>{subtitle}</p>
        </div>
    )
    
}