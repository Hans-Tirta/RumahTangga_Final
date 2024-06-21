import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Cleaning Services</span>
            <span>Maintenance and Repair Services</span>
            <span>Handyman Services</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Lawn and Garden Care</span>
            <span>Home Improvement and Renovation</span>
            <span>Moving and Storage Services</span>
          </div>
          <div className="item">
            <h2>Socials</h2>
            <span>Twitter (@Rumah_Tangga)</span>
            <span>Facebook (@Rumah_Tangga)</span>
            <span>Instagram (@Rumah_Tangga)</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Rumah Tangga</h2>
            <span>@ Copyright 2024 By Rumah Tangga</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer