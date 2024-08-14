import React, {useState} from 'react';
import { cardsOne } from "../../assets/index";
import NgoCard from './NgoCard';

function Cards({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <>
            {data.map(src => (
                <div
                    key={src.id}
                    className="card"
                    style={{
                        backgroundImage: `url(${cardsOne})`
                    }}
                >
                    <div className='overlay'>
                        <p className='ngo-page-card-text' >{src.description}</p>
                        <p>{src.location}</p>
                        <button
                            className='ngo-page-card-help-button'
                            onClick={openDialog}
                        >Help</button>
                        {isOpen && (
                            <NgoCard
                                closeDialog={closeDialog}
                                dataId={src.id} />
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cards