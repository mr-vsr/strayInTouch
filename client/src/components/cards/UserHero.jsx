import React, { useState, useEffect } from 'react';
import { db } from "../../auth/firebase-congif";
import { collection, getDocs } from "firebase/firestore";
import { HeroImage } from '../../assets';

function UserCard() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "helpData"));
                const fetchedData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setNumber(fetchedData.length);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='hero-section-container' id='hero'>
            <div className='hero-section-image-container'>
                <img src={HeroImage} className='hero-section-image' alt='hero-section' />
            </div>
            <div className='hero-section-cta-container'>
                <h1 className='hero-section-cta'>
                    Rescued {number} animals till date!
                </h1>
            </div>
        </div>
    )
}

export default UserCard