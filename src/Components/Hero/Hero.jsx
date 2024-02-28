import React from 'react'
import './Hero.css'
// import logo from '../../assets/logo.png'
const Hero = () => {
  return (
    <div>
      <div className="hero_page">
        <div className="logo">{/* <img src={logo} alt="" /> */}</div>
        <div className="hero_text">
          <h1>OPENING SOON</h1>
          <p>In the interim, you can still place your order on WhatsApp</p>
          <div className="whatsApp_link">

            <a href="">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero