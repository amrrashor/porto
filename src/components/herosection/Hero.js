import React from 'react'
import './_hero.scss'
import { Button } from '../buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS YOU</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btn' buttonStyle='btn--outline' buttonSize="btn--large">GET STARTED</Button>
                <Button className='btn' buttonStyle='btn--primary' buttonSize="btn--large">WATCH TRAILER <FontAwesomeIcon className="play-circle" icon={faPlayCircle} /></Button>
            </div>
        </div>
    );
}

export default Hero;