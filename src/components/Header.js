import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import { StyledHeader } from './styled/StyledHeader'
import Logo from "../assets/svgs/Logo.svg"
import hamburger from "../assets/svgs/hamburger.svg"

const Header = (props) => {
  const [isOpen , setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleConnectWallet = () => {
    props.toggleOverlay();
    handleClick();
  }
  return (
    <StyledHeader>
        <Link to = "/">
        <div>
            <img
             src={Logo}
             alt = "logo"
            />
        </div>
        </Link>

        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/places">Place To Stay</Link>
            <Link>NFTs</Link>
            <Link>Community</Link>
        </nav>
        <div className='button'>
            <button onClick={props.toggleOverlay}>Connect Wallet</button>
        </div>
        <div className='hamburger' onClick={handleClick}>
          <img src = {hamburger} alt = "menu"/>
        </div>

        {isOpen && <div className='ham-menu'>
          <ul>
            <li><Link to = "/"  onClick={handleClick}>Home</Link></li>
            <li><Link to = "/places" onClick={handleClick}>Places To Stay</Link></li>
            <li><Link onClick={handleClick}>NFTs</Link></li>
            <li><Link onClick={handleClick}>Community</Link></li>
            <li className='button-mobile'>
              <div>
                <button onClick={ handleConnectWallet }>Connect Wallet</button>
              </div>
            </li>
          </ul>
        </div>}
    </StyledHeader>
  )
}

export default Header