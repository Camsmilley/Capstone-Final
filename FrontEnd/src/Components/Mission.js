import {useEffect} from 'react'
import Footer from './Footer';
import Header from './Header';

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Header/>
         <div className='main container section'>
            <div className='secTitle'>
                <div className='title'>
                </div>
    <small className='mission' style={{marginTop: '30px'}}> Mission and Vision Statement</small>
      <hr/>
      </div>
      <div className="col-12 ">
        <h5 className="fw-bold- text-success" style={{marginTop: '-30px'}}>Our Purpose</h5>
        <p>To never stop exploring trails that expand both consumers and companies choices to discover and decide</p>
      </div>
      <div className="col-12 ">
        <h5 className="fw-bold- text-success">Our Mission</h5>
        <p>Our Mission statement is to share our hiking expertise so that anyone, ­ novice or
             expert, ­ can have a high­ quality hiking experience, and to do business with integrity
              such that we are always able to lend a helping hand to causes and individuals in need</p>
      </div>
      <div className="col-12">
        <h5 className="fw-bold- text-success">Our Vision</h5>
        <p>Our vision is to help our customers enjoy the mountain on the best equipment we can provide, in order to suit their needs.</p>
     <hr/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Mission;
