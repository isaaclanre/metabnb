import React from 'react'
import "../../styles.css"
import metamask from "../../assets/Images/MetaMask.png"
import walletconnect from "../../assets/Images/WalletConnect.png"

// import { StyledOverlay } from '../styled/StyledOverlay'

const Overlay = ({isOpen , onClose}) => {
  return (
    <>
        {isOpen && (
            <div className='overlay'>
                <div className="overlay__background">
                    <div className="overlay__container">
                        <div className="overlay__controls">
                            <h1>Connect Wallet</h1>
                            <button
                                className="overlay__close"
                                type="button"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className='overlay__children'>
                            <p>Connect your preferred wallet</p>
                            <div id = "metamask">
                                <div className='wallet'>
                                    <img src = {metamask} alt = "metamask" />
                                    <p>MetaMask</p>
                                </div>
                                <div className='wallet-select'>
                                    <p>{'>'}</p>
                                </div>
                            </div>
                            <div>
                                <div className='wallet'>
                                    <img src = {walletconnect} alt = "walletconnect" />
                                    <p>WalletConnect</p>
                                </div>
                                <div className='wallet-select'>
                                    <p>{'>'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Overlay