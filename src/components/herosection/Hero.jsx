import React,{useState,useEffect} from 'react'
import { HeroImage, Hero1, Hero2, Hero3 } from "../../assets/index";
import { db } from "../../auth/firebase-congif";
import { collection, addDoc } from "firebase/firestore";
import { Form } from "../index";




function HeroSection() {
//object named strayInfo to store all the infor regarding a stray animal
  const [strayInfo, setStrayInfo] = useState({
    informant: "",
    contact: "",
    location: "",
    description: "",
    exactLoc: {}
  })

  let name, value;
  console.log(strayInfo);
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStrayInfo({ ...strayInfo, [name]: value });
  }

  // const pushData = async () => {
  // try {
  //   const strayRef = await addDoc(collection(db, "strayInfo"), strayInfo);
  //   if (strayRef.id) {
  //     setStrayInfo({
  //       informant: "",
  //       contact: "",
  //       location: "",
  //       description: "",
  //       exactLoc: {}
  //   });
  //   }
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  //   }
  // }

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
      } else {
        alert('Please fill in all required fields.');
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


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
  },[])


  return (
    <div className='hero-section-container' id='hero'>
      <div className='hero-section-image-container'>
        <img src={HeroImage} className='hero-section-image' />
      </div>
      <div className='hero-section-cta-container'>
        <h1 className='hero-section-cta'>
          Inclusive care for stray animals with special needs
        </h1>
      </div>
      <div className='hero-section-bottom'>
        <div className='hero-section-bottom-images-container'>
          <div className='hero-section-bottom-image1-container'><img src={Hero1} className='hero-section-bottom-image' /></div>
          <div className='hero-section-bottom-image2-container'><img src={Hero2} className='hero-section-bottom-image' /></div>
          <div className='hero-section-bottom-image3-container'><img src={Hero3} className='hero-section-bottom-image' /></div>
        </div>
        <div className='hero-section-bottom-cta-container'>
          <h4 className='hero-section-bottom-cta'>STRAY IN TOUCH IF ENCOUNTERED STREET ANIMALS IN POOR STATE</h4>
        </div>
        <div className='hero-section-bottom-get-in-touch'>
          <div className='hero-section-bottom-get-in-touch-heading-container'><h4 className='hero-section-bottom-get-in-touch-heading'>GET CONNECTED WITH NEAREST NGO</h4></div>
          <Form
            pushData={pushData} 
            strayInfo={strayInfo}
            data={data}
            />
        </div>
      </div>
    </div>
  )
}

export default HeroSection