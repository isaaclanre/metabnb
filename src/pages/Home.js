import React from 'react'
import "../styles.css"
import Landing from "../components/Sections/Landing"
import MBLogo from "../assets/svgs/MBLogo.svg"
import MetaLogo from "../assets/svgs/MetaLogo.svg"
import OpenSeaLogo from "../assets/svgs/OpenSeaLogo.svg"
import PlacesSection from '../components/Sections/PlacesSection'
import NFTSection from '../components/Sections/NFTSection'



const Home = () => {

  return (
    <>
    <Landing  />
    <div className='sponsors-div'>
        <div>
            <img 
                src = {MBLogo}
                alt = "Logo"
            />
        </div>
        <div>
        <img 
                src = {MetaLogo}
                alt = "Logo"
            />
        </div>
        <div>
        <img 
                src = {OpenSeaLogo}
                alt = "Logo"
            />
        </div>
    </div>
    <PlacesSection />
    <NFTSection />
    </>
  )
}

export default Home