import React from 'react';
import { cardsOne, cardsTwo,Donations } from "../../assets/index";

// {
// cardsInfo
// }

function Cards() {

    const cardsInfo = [cardsOne, cardsTwo, cardsOne, cardsTwo, cardsOne, cardsTwo, cardsOne, Donations, cardsTwo];

    return (
        <>
            {cardsInfo.map(src => (
                <div
                    key={src}
                    className="card"
                    style={{
                        backgroundImage: `url(${src})`
                    }}
                >
                    <div className='overlay'>
                        <p className='ngo-page-card-text' >Hurt dog need help in kuvempu nagar in mysuru</p>
                        <button className='ngo-page-card-help-button'>Help</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cards