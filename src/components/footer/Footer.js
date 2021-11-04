import React from "react";
import './_footer.scss';
import { Button } from './../buttons/Button';
import { Link } from "react-router-dom";
import FooterDb from "./FooterDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faCentercode, faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <h2 className="footer-subscription-heading">
                    join the adventure newsletter to receieve our best vacation deals
                </h2>
                <div className="input-areas">
                    <form>
                        <input className='footer-input' type="email" name="email" placeholder='write your email' />
                        <Button buttonStyle='btn--outline'>subscribe</Button>
                    </form>
                </div>
            </section>
            <section className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        {FooterDb.map(e => {
                            return (
                                <div className="single-item">
                                    <Link className='categories' key={e.id} to={e.path}>
                                    <p>{e.title}</p>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="social">
                <div className="social-icon-wrapper">
                    <Link className="social-icon" path="/" target="_blank"><FontAwesomeIcon  icon={faFacebookF} /></Link>
                    <Link className="social-icon" path="/" target="_blank"><FontAwesomeIcon  icon={faTwitter} /></Link>
                    <Link className="social-icon" path="/" target="_blank"><FontAwesomeIcon  icon={faLinkedin} /></Link>
                    <Link className="social-icon" path="/" target="_blank"><FontAwesomeIcon  icon={faBehance} /></Link>
                </div>
            </section>
            <small>PORTO &copy; 2021</small>

        </div>
    );
}

export default Footer;