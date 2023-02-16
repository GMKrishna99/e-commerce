import React from 'react'
import clicktocartlogo from '../../../src/assets/logo.png'
import facebook from '../../../src/assets/social icons/facebook.png'
import instagram from '../../../src/assets/social icons/instagram.png'
import twitter from '../../../src/assets/social icons/twitter.png'
import download from '../../../src/assets/download.png'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-col-header"> Popular locations </div>
          <div className="footer-col-item">Tirupati</div>
          <div className="footer-col-item">Bangalore</div>
          <div className="footer-col-item">Chennai</div>
          <div className="footer-col-item">Hyderabad</div>
          <div className="footer-col-item">Mumbai</div>
          <div className="footer-col-item">Pune</div>
          <div className="footer-col-item">Kolkata</div>
        </div>
        <div className="footer-col">
        <div className="footer-col-header">Trending Search</div>
          <div className="footer-col-item">Bikes</div>
          <div className="footer-col-item">Cars</div>
          <div className="footer-col-item">Mobile Phones</div>
          <div className="footer-col-item">Laptops</div>
          <div className="footer-col-item">Desktops</div>
          <div className="footer-col-item">Cameras</div>
          <div className="footer-col-item">TVs</div>
        </div>
        <div className="footer-col">
        <div className="footer-col-header">About Us</div>
          <div className="footer-col-item">About Click To Cart Group</div>
          <div className="footer-col-item">Click To Cart Blog</div>
          <div className="footer-col-item">Contact Us</div>
          <div className="footer-col-item">Click To Cart for Businesses</div>
        </div>
        <div className="footer-col">
        <div className="footer-col-header">More From Click To Cart</div>
        <div className="footer-col-item">Help</div>
        <div className="footer-col-item">Sitemap</div>
        <div className="footer-col-item">Legal & Privacy Information</div>
        </div>
        <div className="logo">
          <img src={clicktocartlogo} alt="" />
          <div className="social">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" /> 
            <img src={twitter} alt="" />
          </div>
          <div className="download-btns">
          <img src={download}alt=""/>
          </div>
        </div>
    </div>
      <div className="footer-bottom">
        Made With ❤️ By Click To Cart
      </div>
    </footer>
  )
}

export default Footer