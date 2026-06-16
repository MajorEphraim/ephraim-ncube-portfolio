import './Drawer.css';
import NameComp from '../NameComp/NameComp';
import CloseButton from '../CloseButton/CloseButton';

const linkData = ["Home", "Experience", "Projects", "Skills", "Contact"];

export default function Drawer({
    isOpen,
    onClose,
    activeLink = "home"
}) {
    const handleNavigation = (name) => {
        onClose();

        //delaying the navigation so the closing animation is smooth and complete
        setTimeout(() => {
            const section = document.getElementById(name.toLowerCase());

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 350);
    };

    return (
        <div className={`drawer-container ${isOpen ? 'open' : 'close'}`}>
            <div className="app-drawer">
                <div className="upper-part">
                    <div className="name-comp-and-close-btn">
                        <NameComp />
                        <CloseButton handleClick={onClose} />
                    </div>

                    <ul>
                        {linkData.map((name) => (
                            <li
                                key={name}
                                className={`drawer-link${
                                    activeLink === name.toLowerCase()
                                        ? ' active'
                                        : ''
                                }`}
                                onClick={() => handleNavigation(name)}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="co-operation-text">
                    Full Stack Developer &middot; &copy; {new Date().getFullYear()} Ephraim Ncube &middot; All rights reserved.
                </p>
            </div>
        </div>
    );
}