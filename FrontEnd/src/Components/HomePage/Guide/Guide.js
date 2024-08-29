import React from 'react'
import './Guide.css'

// Imported Images
import tourGuide from  '../../../assets/safety.png'
import tourPackage from '../../../assets/fam.png'
import safari from  '../../../assets/hiking.png'

const Guide = () => {
  return (
    <div className='guide container section'>
      <div className="secContainer">
        <span className="secTitle">
        Explore Hiking Trails
          <p>Discover breathtaking hiking spots in the Philippines with our dedicated personal guides for your adventure.</p>
        </span>

        <div className="grid steps">
            <div className="singleStep">
               <img src={tourPackage} alt="Image" />
               <div className="information">
                <span className="title">
                Family-Like Experience
                </span>
                <p>
                Join us for a memorable hiking journey where your safety and enjoyment are our top priorities.
                </p>
               </div>
            </div>

            <div className="singleStep">
               <img src={tourGuide} alt="Image" />
               <div className="information">
                <span className="title">
                Safety First Always
                </span>
                <p>
                We prioritize your safety while ensuring you have an enjoyable and unforgettable hiking experience with us. 
                </p>
               </div>
            </div>

            <div className="singleStep">
               <img src={safari}alt="Image" />
               <div className="information">
                <span className="title">
                Guided Hiking Adventures
                </span>
                <p>
                Experience the beauty of nature with our expert guides who treat you like family on every hike.
                </p>
               </div>
            </div>
        </div>


      </div>
      
    </div>
  )
}

export default Guide