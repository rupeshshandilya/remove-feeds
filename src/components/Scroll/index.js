import React, { useState } from 'react'
import ScreenText from './ScreenText';
import "./scroll.css"

const scrollData= [
    {
        heading:"Opearate a distraction free Youtube.",
        description:"work pending",
        mobile_img:"images/user.png",
    },

    {
      heading:"Opearate a distraction free Youtube.",
      description:"work pending",
        mobile_img:"images/work-1.png",
    },

    {
      heading:"Opearate a distraction free Youtube.",
      description:"work pending",
        mobile_img:"images/work-2.png",
    },

    {
      heading:"Opearate a distraction free Youtube.",
      description:"work pending",
        mobile_img:"images/work-3.png",
    },
];

const Scroll = () => {
    const [currentImg, setCurrentImg]= useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i)=>(
            <div className="scroll-full-screen">
                <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg}/>
            </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
            <div className="mobile-mockup-screen flex absolute-center">
                <img src={scrollData[currentImg].mobile_img} className="mobile-screen-img slide-in-right" key={scrollData[currentImg].mobile_img}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Scroll;
