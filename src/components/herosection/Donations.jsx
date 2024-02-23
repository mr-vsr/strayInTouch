import React from 'react';
import { Donations as Donate} from "../../assets/index";

function Donations() {
return (
    <div className='donations-container'>
        <p className='donations-cta-heading'>Make a donation today and <span className='donations-cta-special-text'>be a hero </span> for homeless stray animals</p>
        <div className='donations-button-container'>
            <button className='donations-join-our-community-button donations-button'>Join Our Community</button>
            <button className='donations-donate-button donations-button'>Donate</button>
        </div>
    </div>
)
}

export default Donations