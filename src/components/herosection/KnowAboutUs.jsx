import React from 'react';
import {Dog,DogBG} from "../../assets/index"

function KnowAboutUs() {
return (
    <div className='know-about-us-container' id='about'>
            <div className='know-about-us-left'>
            <h2 className='know-about-us-heading'>Know About Us</h2>
            <div className='know-about-us-description'>
                <h3 className='know-about-us-description-heading'>We need help connecting strays to the nearest NGOs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet sed euismod. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Facilisi etiam dignissim diam quis enim. Morbi tristique senectus et netus et malesuada. Lectus magna fringilla urna porttitor rhoncus dolor purus. Volutpat odio facilisis mauris sit amet massa vitae. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
            </div>
            <img className='know-about-us-image' src={Dog} />
            <img className='know-about-us-bg' src={DogBG} />
    </div>
)
}

export default KnowAboutUs