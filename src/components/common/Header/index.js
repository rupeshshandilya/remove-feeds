import React, {useState} from 'react'
import "./header.css"
const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };

  return (
    <div className="mobile-menu-wrapper">
      <div className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar">
          <div className="mobile-nav-item">Join the waitlist</div>
          <div className="mobile-nav-item">Register</div>
        </div>
      </div>
        <div className="flex max-width header">
          {/* ------------------------------------------ IMAGE ------------------------------------------------------ */}
            <img src="images/logo.png" alt="remove-feed-img" className="header-logo"/>
            <div className="only-mobile mobile-menu-button-wrapper">
            <button  class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`} 
            type="button"
            onClick={toggleMobileMenu}>
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            </div>
            <div className="non-mobile flex">
              <div className="header-nav-item">Join the waitlist</div>
              <div className="header-nav-item">Register</div>
            </div>
        </div>
    </div>
  )
}

export default Header;