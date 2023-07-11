import React from 'react';
import bglogo from "./img/biglogo.svg"

const Header = () => {
  return (
    <>
       <header>
        <nav className="nav">
            <div className="link"><a href="Header.js"><img src={bglogo} alt="" /></a></div>
            <div className="nav-content">
                <ul>
                    <li className="lin  ks"><a href="Header.js">Home</a></li>
                    <li className="links"><a href="Header.js">Why Saitama2.0</a></li>
                </ul>
                <div className="btn"><a href="Header.js">Buy saitama2.0</a></div>
            </div>
        </nav>
    </header> 
    </>
  )
}

export default Header