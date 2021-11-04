import './_navbar.scss';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../buttons/Button'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container"> 
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        PORTO <FontAwesomeIcon className="fa-typo3" icon={faTypo3}></FontAwesomeIcon>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />   
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links link-mobile" onClick={closeMobileMenu}>
                                sign in
                            </Link>
                        </li>
                    </ul>
                    <div className="sign">
                        {button && <Button buttonStyle='btn--outline'>sign up</Button>}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;