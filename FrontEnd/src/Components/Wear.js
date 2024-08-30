import {useEffect} from 'react'
import './Wear.css'
import { GoDotFill } from "react-icons/go";
import img from '../assets/gear.webp';
import img1 from '../assets/hike1.webp';
import img2 from '../assets/hike2.webp';
import img3 from '../assets/poles.webp';
import img4 from '../assets/knee.jpg'
import Header from './Header';
import Footer from './Footer';

const Wear = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
       <Header/>
        <div className='container section'>
            <div className='secTitle'>
                <div className='title'>
                </div>
                    <h1 className='wear'> What to Wear Hiking?</h1>
                    <h6 className='text-dark text-start'>While you really don’t need any kind of specialized gear for easy hikes or if you are 
                        just starting out, for harder hikes I recommend wearing the following:</h6>
      </div>
      <div className='paragraph1'>
      <div className="col-12 t-10 ">
        <p><GoDotFill className="icon"/>Hiking boots or trail runners<br/>
            <GoDotFill className="icon"/>Moisture-wicking T-shirt or tank top OR<br/>
            <GoDotFill className="icon"/>Lightweight, breathable long-sleeve shirt (I wear this even on hot days to protect my skin from the sun)<br/>
            <GoDotFill className="icon"/>Quick-drying hiking shorts, convertible pants, or leggings.  <br/>
            <GoDotFill className="icon"/>Hiking socks</p>
      </div>

      <div class="card-group gap-4">
  <div class="card card  col-3 p-3 bg-white rounded-5">
    <img src={img} class="card-img-top rounded-5" alt="..."/>
    <div class="card-body bg-white">
      <h5 class="card-title">Materials</h5>
      <p class="card-text">Consider waterproofing and breathability when picking out hiking shoes. 
        If you’ll be spending lots of time crossing shallow streams, hiking through snow or mud, 
        you might want waterproof boots. Just keep in mind that these boots tend to be far less 
        breathable than their non-waterproof counterparts. That means that sweat gets trapped, and 
        if you overtop the boots in a deeper stream or puddle, they’ll take longer to dry. For summer hiking,
         many hikers prefer breathable, synthetic shoes (like those with mesh paneling) that dry faster if they do get wet.</p>
    </div>
  </div>
  <div class="card card col-3 p-3 bg-white rounded-5">
    <img src={img1} class="card-img-top rounded-5" alt="..."/>
    <div class="card-body bg-white">
      <h5 class="card-title">What Not to Wear in Your First Hiking Outfit
      Cotton</h5>
      <p class="card-text">Normal T-shirts, denim jeans, sweatpants, sweatshirts, and other cotton apparel might serve you fine on short jaunts in the woods, but for serious hikes, leave them at home. Cotton retains moisture, making you clammy at best, and at worst, it sucks heat and leaves you hypothermic. Opt for wicking materials instead like wool or synthetic shirts and fleece layers. The exception: hikes in extremely hot, dry climates, 
        where cotton’s cooling properties can help keep you from overheating.</p>
    </div>
  </div>
  <div class="card card col-3 p-3 bg-white rounded-5">
    <img src={img2} class="card-img-top rounded-5" alt="..."/>
    <div class="card-body bg-white">
      <h5 class="card-title">What Shoes to Wear Hiking</h5>
      <p class="card-text">Sore feet lead to a bad time on trail. For your first few hikes, wear any sturdy, closed-toe athletic shoes you have. (Just pick a pair you don’t mind getting dirty.) Sneakers are fine for most easy to moderate trails, 
        but you may want shoes with some extra traction and support for steep hikes.</p>
    </div>
  </div>
</div><br/>
<br/>
      <div className="col-12">
        <h3 className="fw-bold- text-success">For Cold Weather:</h3>
        <p><GoDotFill className="icon"/>Gloves or mittens <br/>
            <GoDotFill className="icon"/>Waterproof jacket<br/>
            <GoDotFill className="icon"/>Waterproof hiking pants (I wear these on top of my leggings)<br/>
            <GoDotFill className="icon"/>Snowshoes or snow spikes (for snowy/icy trails)<br/>
            <GoDotFill className="icon"/>Gaiters to keep debris or snow out of your boots</p><br/>
      </div>
      <div className="col-12">
        <h2 className="fw-bold- text-success">Hiking Essentials: What to Pack</h2>
        <h6>What to pack depends on a few things: How long is the hike?  Are you day-hiking or planning a multi-day trek? 
             For day hikes, I always have the following in my backpack: </h6><br/>
             <h3 className="fw-bold- text-success"c>Essentials:</h3><br/>

             <p> <GoDotFill className="icon"/>Downloaded Map<br/>
                <GoDotFill className="icon"/> Wallet (if you need to pay for park entrance fees or gas)<br/>
                <GoDotFill className="icon"/>Cell phone and extra charging brick<br/>
                <GoDotFill className="icon"/>Headlamp or flashlight with extra batteries</p><br/>

                <h3 className="fw-bold- text-success"c>Food and Water:</h3><br/>
                <p><GoDotFill className="icon"/>Water (I bring two 1-liter bottles, even for short hikes)<br/>
                    <GoDotFill className="icon"/>High-energy snacks (nuts, energy bars, dried fruits)</p><br/>

                    <h3 className="fw-bold- text-success"c>Weather Protection:</h3><br/>
                        <p><GoDotFill className="icon"/>Sunscreen and lip balm with SPF<br/>
                    <GoDotFill className="icon"/>Insect repellent in a travel-sized spray bottle<br/>
                    <GoDotFill className="icon"/>Lightweight, packable rain jacket</p><br/>

                    <h3 className="fw-bold- text-success"c>Emergency Supplies:</h3><br/>
                        <p><GoDotFill className="icon"/>Emergency blanket (these are cheap and very lightweight; always a good idea to have)<br/>
                    <GoDotFill className="icon"/>First-aid kit: My first-aid kit is fairly simple and usually just has moleskin, antibiotic ointment, and anti-inflammatory medication<br/>
                    <GoDotFill className="icon"/>Whistle</p><br/>

                    <h3 className="fw-bold- text-success">Emergency Supplies:</h3><br/>
                    <div class="card-group gap-4">
  <div class="card  col-3 p-3 bg-white rounded-5 ">
    <img src={img3} class="card-img-top rounded-5" alt="..."/>
    <div class="card-body bg-white">
      <h5 class="card-title className=fw-bold- text-success">Trekking Poles</h5>
      <p class="card-text">Trekking poles are great for steep trails</p>
    </div>
  </div>
  <div class="card col-3 p-3 bg-white rounded-5">
    <img src={img4} class="card-img-top rounded-5" alt="..."/>
    <div class="card-body bg-white">
      <h5 class="card-title" className="fw-bold- text-success">Knee Brace</h5>
      <p class="card-text">A good hiking knee brace can be a lifesaver for steep descents.</p>
    </div>
  </div>
  </div><br/>
  <br/>

      <div className="col-12">
        <h2 className="fw-bold- text-success">How to Get Into Hiking? </h2>
        <h6 className='text-start'>The best way to get over your own fears of heading out on the trail is to start with easy, short trails and go on good-weather days. 
            Our favorite resource for finding new trails is Alltrails.com. This fantastic website lets you search for hikes near you and filter by distance, 
            elevation gain, and more. </h6><br/>
        <p>1. Start slow: Start with easy trails near you.  This is a great way to get outside and explore your hometown!<br/>
        2. Go with friends: Take advantage of the best part of hitting the trails: doing it with others!  Grab your best friend, 
        and find a trail that you’re both excited about!<br/>
        3. Bring your music: This is a great way to push through when I’m tired<br/>
        4. Opt for good weather: Especially when starting out, pick fair weather days.  You won’t need as much equipment, 
        and you’re more likely to have a great experience.<br/>
        5. Watch for injuries and decrease quantity as needed: if something starts hurting, cut back on your miles.  You want to catch injuries
         fast so you can heal quickly and stay on the trails.</p>
     <hr/>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Wear;
