import {useEffect} from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../assets/safety2.jpg';

const Trails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Header/>
      <div className="container" >
  <div className="row padding">
    <div className="col-md-12 col-lg-6">
      <h2 style={{marginTop: '140px'}}>Hiking Trails</h2>
      <p>Explore breathtaking hiking locations across the Philippines with ForeverHiking, 
        where your safety and enjoyment are our top priorities.</p>
        <br/>
        <h2>Locations</h2>
       <p>Philippines, various trails</p>
       <br/>
       <h2>Hours</h2>
       <p>Daily: 8am-5pm</p>
    <br/>
      </div>
    <div className="col-lg-6">
      <img src={img} className="img-fluid" 
      style={{marginTop: '140px'}}/>
    </div>
  </div>
</div>

<div className="container-fluid mt-5">
        <span className="secTitle">
        Hiking Adventures
        </span>
        <p className='text-center mt-6'>
        Explore breathtaking trails with your personal guide in the Philippines.
            </p>

        <div className="description grind">
          <div className="sigleGrid">
            <h2>Family-Oriented Hiking Experience</h2>
            <p>
            At Trekssafari, we provide personalized guidance to the best hiking spots in the Philippines,<br/>
            ensuring your safety and enjoyment throughout your adventure. Join us for an unforgettable experience!
            </p>
          </div>
          <br/>
  </div>  
  </div>

  <div className='row container-fluid'>
      <div class="card col-3 p-1 bg-white rounded-5">
        <img src={img} className="card-img-top rounded-5 " alt="..."/>
      </div>
      <div class="card col-3 p-1 bg-white rounded-5 ">
        <img src={img} className="card-img-top rounded-5" alt="..."/>
      </div>
      <div class="card col-3 p-1 bg-white rounded-5">
        <img src={img} className="card-img-top rounded-5" alt="..."/>
      </div>
      <div class="card col-3 p-1 bg-white rounded-5">
        <img src={img} className="card-img-top rounded-5" alt="..."/>
      </div>
  </div>
<br/> 
   
<div className="card-group">
  <div class="card">
    <img src={img} className="card-img-top" alt="..."/>
    </div>
    <h4>Discover the Best Hiking Trails in the Philippines with Trekssafari</h4>
    <p>Welcome to Trekssafari, your personal guide to the stunning hiking places in the Philippines. Our mission is to ensure your safety and enjoyment while exploring breathtaking trails. 
        Join us for an unforgettable adventure where you'll be treated like family. We can't wait to meet you and start hiking!</p>
  
  <div class="card">
    <img src={img} className="card-img-top" alt="..."/>
    <h4>Explore the Best Hiking Trails in the Philippines with Trekssafari</h4>
    <p>Discover breathtaking hiking destinations in the Philippines with Trekssafari. Our personal guides prioritize your safety and enjoyment, ensuring a memorable adventure. Join us and experience the beauty 
        of nature while being treated like family. We can't wait to meet you and embark on this journey together!</p>
    </div>
  </div>

<Footer/>
    </>
    
  )
}

export default Trails;
