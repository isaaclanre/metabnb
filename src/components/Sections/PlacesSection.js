import React from 'react'
import Card from '../Card'
import { LandingData as houses } from '../../data'
import { StyledPlacesSection } from '../styled/HomeStyles'

const PlacesSection = () => {
  return (
    <StyledPlacesSection>
        <h1>Inspiration for your next adventure</h1>
        <section>
           {
              houses.map((house)=> <Card img = {house}/>)
           }
        </section>
    </StyledPlacesSection>
  )
}

export default PlacesSection