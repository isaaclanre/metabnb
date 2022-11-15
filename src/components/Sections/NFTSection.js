import React from 'react'
import { StyledNFTSection } from '../styled/HomeStyles'
import img from "../../assets/Images/NFT.png"

const NFTSection = () => {
  return (
    <StyledNFTSection>
        <div id ='nft-section'>
            <div>
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. 
                    These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
        <div className='img-div'>
            <img 
                src = {img}
                alt = "nfts"
            />
        </div>
    </StyledNFTSection>
  )
}

export default NFTSection