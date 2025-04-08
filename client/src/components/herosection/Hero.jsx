import React, { useState } from 'react'
import { HeroImage, Hero1, Hero2, Hero3 } from "../../assets/index";
import { motion } from 'framer-motion';
import Form from '../form/Form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../auth/firebase-config';
import { useDispatch } from 'react-redux';
import { setSuccess } from '../../store/slices/formSlice';

function HeroSection() {
  const [strayInfo, setStrayInfo] = useState({
    informant: '',
    contact: '',
    location: '',
    description: '',
    image: null
  });

  const dispatch = useDispatch();

  const data = (e) => {
    const { name, value } = e.target;
    setStrayInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const pushData = async (e) => {
    e.preventDefault();
    if (!strayInfo.informant || !strayInfo.contact || !strayInfo.location || !strayInfo.description) {
      alert('Please fill all the fields');
      return;
    }

    try {
      await addDoc(collection(db, 'strayInfo'), {
        ...strayInfo,
        timestamp: new Date()
      });

      setStrayInfo({
        informant: '',
        contact: '',
        location: '',
        description: '',
        image: null
      });

      dispatch(setSuccess(true));
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='hero-section-container' id='hero'>
      <div className='hero-section-content'>
        <div className='hero-section-image-container'>
          <motion.img
            src={HeroImage}
            className='hero-section-image'
            alt='hero-section'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
          </motion.div>
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
      <div className='hero-section-form-container'>
        <Form
          data={data}
          strayInfo={strayInfo}
          pushData={pushData}
        />
      </div>
    </div>
  )
}

export default HeroSection