import React from 'react'
import BG from "../assets/images/girl.jpg";
const HeroSection = () => {
  return (
    <div className="HeroSectionContainer">
      <div className='HeroSectionLeft'>
        <div className='heroText'>
          Nurturing Minds, Empowering Futures: Connect, Learn, Succeed!
        </div>
        <div></div>
        <div className='HeroSectionLeftButton'>Explore More</div>
      </div>
      <div className='HeroSectionRight'>
      <img src={BG} className='HeroSectionRightImage' alt="" />
      </div>
    </div >
  )
}

export default HeroSection