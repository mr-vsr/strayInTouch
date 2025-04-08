import React, { useState, useEffect } from 'react'
import { HeroImage, Hero1, Hero2, Hero3 } from "../../assets/index";
import { db } from "../../auth/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { Form } from "../index";
import { Success } from '../../assets/index';
import { useDispatch, useSelector } from 'react-redux';
import { isSuccess } from "../../store/authSlice";
import { motion } from 'framer-motion';

function HeroSection() {
  //object named strayInfo to store all the infor regarding a stray animal
  const [strayInfo, setStrayInfo] = useState({
    informant: "",
    contact: "",
    location: "",
    description: "",
    exactLoc: {}
  })

  const dispatch = useDispatch();

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStrayInfo({ ...strayInfo, [name]: value });
  }

  const pushData = async () => {
    try {
      const requiredFields = ['informant', 'contact', 'location', 'description'];
      const missingFields = requiredFields.filter(field => !strayInfo[field]);

      if (missingFields.length === 0) {
        const strayRef = await addDoc(collection(db, "strayInfo"), strayInfo);
        if (strayRef.id) {
          setStrayInfo({
            informant: "",
            contact: "",
            location: "",
            description: "",
            exactLoc: {}
          });
        }
        dispatch(isSuccess({
          success: true
        }))
      } else {
        alert('Please fill in all required fields.');
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const success = useSelector((state) => state.auth.success);


  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setStrayInfo({ ...strayInfo, "exactLoc": { latitude, longitude } });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    handleLocation();
  }, [])


  return (
    <div className='hero-section-container' id='hero'>
      <div className='hero-section-content'>
        <div className='hero-section-image-container'>
          <img src={HeroImage} className='hero-section-image' alt='hero-section' />
        </div>
        <div className='hero-section-cta-container'>
          <motion.h1
            className='hero-section-cta'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Inclusive care for stray animals with special needs
          </motion.h1>
        </div>
        <div className='hero-section-bottom'>
          <div className='hero-section-bottom-images-container'>
            <div className='hero-section-bottom-image1-container'>
              <motion.img
                src={Hero1}
                className='hero-section-bottom-image'
                alt="dog"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className='hero-section-bottom-image2-container'>
              <motion.img
                src={Hero2}
                className='hero-section-bottom-image'
                alt="dog"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className='hero-section-bottom-image3-container'>
              <motion.img
                src={Hero3}
                className='hero-section-bottom-image'
                alt="dog"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          <div className='hero-section-bottom-cta-container'>
            <motion.h4
              className='hero-section-bottom-cta'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              STRAY IN TOUCH IF ENCOUNTERED STREET ANIMALS IN POOR STATE
            </motion.h4>
          </div>
        </div>
      </div>
      <motion.div
        className='hero-section-form-container'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {success ? (
          <Success />
        ) : (
          <Form
            strayInfo={strayInfo}
            data={data}
            pushData={pushData}
          />
        )}
      </motion.div>
    </div>
  )
}

export default HeroSection