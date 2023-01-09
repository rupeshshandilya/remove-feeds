import React from 'react'
import Button from '../common/Button';
import "./topSection.css"
const TopSection = () => {
  return <div className="hero-section-wrapper">
    <div className="flex absolute-center flex-col hero-section max-width">
        <div className="hero-heading">
        Are you getting 
        distracted by Youtube?
        </div>
        <div className="hero-subheading">
        Youtube is fighting for your attention. We are here to help you!
        </div>
        {/* Change the Href from youtube to app file destination */}
        <a href="#">
        <Button buttonText="Join the waitlist"/>
        </a>

        <a href="#" id="second">
        <Button buttonText="Enter Email Address"/>
        </a>
    </div>
  </div>
}

export default TopSection;
