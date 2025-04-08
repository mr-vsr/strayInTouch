import React from 'react';
import { Dog, DogBG } from "../../assets/index"
import { motion } from 'framer-motion';

function KnowAboutUs() {
    return (
        <div className='know-about-us-container updated-page-container' id='about'>
            <div className='know-about-us-left'>
                <div className='know-about-us-line-container'><hr className='know-about-us-line' /></div>
                <h2 className='know-about-us-heading updated-heading'>
                    Know About Us</h2>
                <div className='know-about-us-description'>
                    <h3 className='know-about-us-description-heading updated-subheading'>We need help connecting strays to the nearest NGOs</h3>
                    <p className='updated-text'>Connecting Compassionate Hearts

                        In StrayInTouch, we believe in the power of community to make a difference. Our platform serves as a bridge between compassionate individuals and NGOs dedicated to helping injured street animals.

                        We're on a mission to create a world where no injured animal is left without care. Through our user-friendly interface, we connect users who encounter injured animals with the nearest NGOs equipped to provide immediate assistance.</p>
                </div>
            </div>
            <img className='know-about-us-image' src={Dog} alt='Dog' />
            <img className='know-about-us-bg' src={DogBG} alt='Background' />
        </div>
    )
}

export default KnowAboutUs