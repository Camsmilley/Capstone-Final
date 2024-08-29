import React, {useEffect} from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

// import Aos from 'aos'
// import 'aos/dist/aos.css'

const Home = () => {

  // useEffect(()=>{
  //   Aos.init({duration: 2000})
  // }, [])

  return (
    <div className='home'>

      <div className="homeText">
        <span data-aos='fade-up' data-aos-duration='2000' className='spanText'>
        Discover scenic trails with TreksSafari
        </span>

        <div data-aos='fade-up' data-aos-duration='4000' className="homeTitle">
        <strong>Trust</strong> our <strong>Hiking Experience</strong>
        </div>

        <Link to="/booknow" data-aos='fade-up' data-aos-duration='6000' className="btn">Book Now</Link>
      </div>
      

    </div>
  )
}

export default Home