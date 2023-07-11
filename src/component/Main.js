import React from 'react'
import Discord from './img/discord.png'
import bglogo from './img/biglogo.svg'
import twitter from './img/twitter.png'
const Main = () => {
  return (
        <div>
            <main>
            <div class="main">
            <div class="left-content">
                <div class="gr">
                    <p>Welcome to</p>
                    <h1>Saitama2.0</h1>
                    <p>the mighty crypto meme token that brings the power of heroes to the world of blockchain! Step into a universe </p>
            </div>

                <div class="btn-container">
                    <div class="primary-btn"><a href="Header.js">
                        <h4>Discord</h4>
                        <div class="discord"><img src={Discord} alt="discord logo" /></div>
                    </a>

                    </div>
                    <div class="primary-btn"><a href="Header.js">
                        <h4>Discord</h4>
                        <div class="discord"><img src={twitter} alt="twitter logo" /></div>
                    </a>
                </div>

            </div>
        </div>
        <div class="right-content">
            <img src={bglogo} alt="" />
        </div>
        </div>
        </main>
    </div>
  )
}

export default Main