import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/Video/video1.mp4'

import {FiFacebook} from  'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  // Create a react hook to add aa scroll animation
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop 
      type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Code
          </h1>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
          </div>

          <div className="leftIcons">

          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home