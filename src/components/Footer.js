import React from 'react'
import DarkLogo from "../assets/svgs/DarkLogo.svg"
import FacebookLogo from "../assets/svgs/FacebookLogo.svg"
import InstagramLogo from "../assets/svgs/InstagramLogo.svg"
import TwitterLogo from "../assets/svgs/TwitterLogo.svg"
import check from "../assets/svgs/Vector.svg"

import { StyledFooter } from './styled/StyledFooter'

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div className='footer-div-one'>
          <img 
            src = {DarkLogo}
            alt = "logo"
          />
          <div className='social-div'>
            <img 
              src = {FacebookLogo}
              alt = "logo"
            />
            <img 
              src = {InstagramLogo}
              alt = "logo"
            />
            <img 
              src = {TwitterLogo}
              alt = "logo"
            />
          </div>
          <div className='certified'><span><img  src = {check} alt = "certified"/></span> <p>2022 Metabnb </p></div>
        </div>
      </div>
      <div>
        <h3>Community</h3>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </div>
      <div>
        <h3>Places</h3>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn More</p>
      </div>
      <div>
        <h3>About Us</h3>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div className='certified-mobile'><span><img  src = {check} alt = "certified"/></span> <p>2022 Metabnb </p></div>
    </StyledFooter>
  )
}

export default Footer