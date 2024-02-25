import React from 'react';
import { WhatWeDo } from "../../assets/index";
import { Medical, Update, Clock, Therapy } from "../../assets/index";

function WhatWedo() {
    return (
        <div className='what-we-do-container' id="what-we-do">
            <div className='what-we-do-description-container'>
                <h2 className='what-we-do-heading'>What We Do</h2>
                <div className='what-we-do-bottom-section-container'>
                    <h3 className='what-we-do-subheading'>Services provided by StrayInTouch</h3>
                    <p className='what-we-do-description'>We have partnered with NGOs among wide range in various localities to cater to the needs of stray animals</p>
                    <div className='what-we-do-services-container'>
                        <div className='what-we-do-services'>
                            <img src={Clock} className='what-we-do-services-image' 
                                alt='image-clock'
                            />
                            <h5 className='what-we-do-services-heading'>Quick Response</h5>
                        </div>
                        <div className='what-we-do-services'>
                            <img src={Medical} className='what-we-do-services-image' 
                            alt='image-medical'
                            />
                            <h5 className='what-we-do-services-heading'>Medical Attention</h5>
                        </div>
                        <div className='what-we-do-services'>
                            <img src={Update} className='what-we-do-services-image'
                            alt='image-update'
                            />
                            <h5 className='what-we-do-services-heading'>Receive Updates</h5>
                        </div>
                        <div className='what-we-do-services'>
                            <img src={Therapy} className='what-we-do-services-image' 
                                alt='image-therapy'
                            />
                            <h5 className='what-we-do-services-heading'>Therapy</h5>
                        </div>
                    </div>
                </div>
            </div>
            <img src={WhatWeDo} className='what-we-do-image' alt='image-whatwedo' />
        </div>
    )
}

export default WhatWedo