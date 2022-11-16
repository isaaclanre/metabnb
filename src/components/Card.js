import React from 'react'
import heart from "../assets/svgs/heart.svg"
// import img from "../assets/Images/CookieHouse.png"
import stars from "../assets/svgs/stars.svg"
import { StyledCard } from './styled/StyledCard'



const Card = (props) => {
  return (
    <StyledCard> 
        <div className='house-avi'>
            <img 
                src = {props.img}
                id = "house-img"
                alt = "house"
            />
            <div className = "heart">
                <img src = {heart} alt = "heart" />
            </div>
        </div>
        <div>
            <p>Desert king</p>
            <p><b>1MBT per night</b></p>
        </div>
        <div>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        <div>
            <img 
                src = {stars}
                alt = "stars"
                id='stars'
            />
        </div>
    </StyledCard>      
  )
}

export default Card