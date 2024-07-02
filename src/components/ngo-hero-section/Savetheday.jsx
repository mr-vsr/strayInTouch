import React, { useState, useEffect } from 'react';
import { Cards } from "../index";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../auth/firebase-congif";

function Savetheday() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "strayInfo"));
                const fetchedData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(fetchedData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);

    // console.log(data);

    return (
        <div className='ngo-page-cards-container'>
            <div className='ngo-page-cards-heading-container'>
                <hr className='ngo-page-cards-heading-line' />
                <h2 className='ngo-page-cards-heading-one'>Save the Stray</h2>
                <h2 className='ngo-page-cards-heading-two'>Save the Day</h2>
            </div>
            <div className='ngo-page-card-container'>
                <Cards data={data} />
            </div>
        </div>
    )
}

export default Savetheday;
