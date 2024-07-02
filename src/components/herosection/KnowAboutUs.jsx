import React from 'react';
import { Dog, DogBG } from "../../assets/index"

function KnowAboutUs() {
    return (
        <div className='know-about-us-container' id='about'>
            <div className='know-about-us-left'>
                <div className='know-about-us-line-container'><hr className='know-about-us-line' /></div>
                <h2 className='know-about-us-heading'>
                    Know About Us</h2>
                <div className='know-about-us-description'>
                    <h3 className='know-about-us-description-heading'>We need help connecting strays to the nearest NGOs</h3>
                    <p>Connecting Compassionate Hearts

                        In StrayInTouch, we believe in the power of community to make a difference. Our platform serves as a bridge between compassionate individuals and NGOs dedicated to helping injured street animals.

                        We're on a mission to create a world where no injured animal is left without care. Through our user-friendly interface, we connect users who encounter injured animals with the nearest NGOs equipped to provide immediate assistance.</p>
                </div>
            </div>
            <img className='know-about-us-image' src={Dog} alt='' />
            <img className='know-about-us-bg' src={DogBG} alt=''/>
        </div>
    )
}

export default KnowAboutUs