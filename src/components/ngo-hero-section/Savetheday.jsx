import React from 'react'
import {Cards} from "../index"

function Savetheday() {
    return (
        <div className='ngo-page-cards-container'>
            <div className='ngo-page-cards-heading-container'>
                <hr className='ngo-page-cards-heading-line' />
                    <h2 className='ngo-page-cards-heading-one'>Save the Stray</h2>
                    <h2 className='ngo-page-cards-heading-two'>Save the Day</h2>
            </div>
            <div className='ngo-page-card-container'>
                <Cards/>
            </div>
        </div>
    )
}

export default Savetheday