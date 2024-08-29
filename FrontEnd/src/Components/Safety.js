import React from 'react';
import './Safety.css';
import Header from './Header';
import Footer from './Footer';
import img from '../assets/mt-pulag.jpg';
import img2 from '../assets/mt-pinatubo.png';
import img3 from '../assets/safety1.avif';

const Safety = () => {
    return(
        <>
        <Header/>
        <div className='container section'>
            <div className='secTitle'>
                <div className='title'>
                </div>
                    <h1 className='wear'> Safety First Always</h1>
                    <h6 className='text-dark text-center'>Your safety and enjoyment is our priority during all hiking adventures in the Philippines.</h6>
      </div>

      <div class="card-group">
  <div class="card">
    <img src={img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Guided Safely</h5>
      <p class="card-text">Our experienced guides prioritize your safety while helping you explore the beautiful hiking spots.</p>
    </div>
  </div>
  <div class="card">
    <img src={img2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Family-Like Experience</h5>
      <p class="card-text">We treat every client as family, ensuring a fun, safe, and memorable hiking experience together.</p>
    </div>
  </div>
</div><br/>
      
<div className="aboutPage container ">
        <span className="secTitle">
        Your Safety is Our Priority
        </span>

        <div className="description grind">
          <div className="sigleGrid">
            <h2>Family-Oriented Hiking Experience</h2>
            <p>
            At Trekssafari, we provide personalized guidance to the best hiking spots in the Philippines,
            ensuring your safety and enjoyment throughout your adventure. Join us for an unforgettable experience!
            </p>
          </div>
          <br/>

          <div className="sigleGrid">
            <h2>Adventure Awaits You</h2>
            <p>
            We are dedicated to treating you like family, prioritizing your safety and enjoyment. Our mission is to create 
            memorable hiking experiences in the beautiful landscapes of the Philippines.
            </p>
          </div>
          </div>

          <img src={img3} className="img-fluid" alt="..." style={{width: '100%'}}/>
    </div>
    </div>
    <Footer/>
        </>
)
}

export default Safety;