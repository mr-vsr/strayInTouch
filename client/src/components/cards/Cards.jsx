import React, { useState } from 'react';
import { cardsOne } from "../../assets/index";
import NgoCard from './NgoCard';
import { motion } from 'framer-motion';

function Cards({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const openDialog = (cardData) => {
        setSelectedCard(cardData);
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
        setSelectedCard(null);
    };

    return (
        <>
            {data.map((src, index) => (
                <motion.div
                    key={src.id}
                    className="card"
                    style={{
                        backgroundImage: `url(${cardsOne})`
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className='overlay'>
                        <p className='ngo-page-card-text'>{src.description}</p>
                        <p className='ngo-page-card-location'>{src.location}</p>
                        <div className='card-actions'>
                            <button
                                className='ngo-page-card-help-button'
                                onClick={() => openDialog(src)}
                            >
                                Help
                            </button>
                            <button
                                className='ngo-page-card-details-button'
                                onClick={() => window.open(`https://www.google.com/maps?q=${src.exactLoc.latitude},${src.exactLoc.longitude}`, '_blank')}
                            >
                                View Location
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
            {isOpen && selectedCard && (
                <NgoCard
                    closeDialog={closeDialog}
                    dataId={selectedCard.id}
                />
            )}
        </>
    )
}

export default Cards