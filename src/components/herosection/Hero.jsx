import React,{useState,useEffect} from 'react'
import { HeroImage, Hero1, Hero2, Hero3 } from "../../assets/index"

function HeroSection() {

  const [informant, setInformant] = useState("");
  const [exactLoc, setExactLoc] = useState(null);
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setExactLoc({ latitude, longitude });
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
    console.log(exactLoc)
  },[])

  console.log(exactLoc)

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
          <form className='hero-section-get-in-touch-form'>
            <input type='text' name={informant}  onChange={(e) => setInformant(e.target.value)} className='hero-section-get-in-touch-input' placeholder='NAME'/>
            <input type='tel' name={contact} onChange={(e) => setContact(e.target.value)} className='hero-section-get-in-touch-input' placeholder='PH NO'/>
            <input type='text' name={location} className='hero-section-get-in-touch-input' placeholder='LOCATION' onChange={(e) => setLocation(e.target.value)} />
            <input type='textarea' name={description} onChange={(e) => setDescription(e.target.value)} className='hero-section-get-in-touch-input special-input' placeholder='BRIEF DESCRIPTION'/>
            <button type='submit' className='hero-section-get-in-touch-button'>Connect</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HeroSection