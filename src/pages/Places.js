import React from 'react'
import "../styles.css"
import toggle from "../assets/svgs/Setting.svg"
import { StyledPlacesSection } from '../components/styled/HomeStyles'
import { PlacesData as houses } from "../data";
import Card from "../components/Card";
import Dropdown from '../components/Dropdown';

const Contact = () => {
  return (
    <>
      <div className='paigination'>
        <Dropdown
          trigger={
            <button>
            <p>Places</p> 
            <p>&darr;</p>
            </button>
          }
          menu={[
            <button>Resturant</button>,
            <button>Cottage</button>,
            <button>Castle</button>,
            <button>Fantastic City</button>,
            <button>Beach</button>,
            <button>Carbins</button>,
            <button>Off-grid</button>,
            <button>Farm</button>
          ]}
        />
        <nav>
          <p>Resturant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>Fantastic City</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
        </nav>
        <div className='location-toggle'>
          <p>Location</p>
          <img src = {toggle} alt = "location toggle" />
        </div>
      </div>
      <StyledPlacesSection>
        <section>
          {
              houses.map((house)=> <Card img = {house}/>)
           }
        </section>
      </StyledPlacesSection>
    </>  
  )
}

export default Contact

