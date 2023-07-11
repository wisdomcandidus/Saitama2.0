import React from 'react'
import bglogo from './img/biglogo.svg'

const Section = () => {
  return (
    <div>
        <section className="pri-section">
            <h2>Why saitama2.0</h2>
            <div className="sec-flex">
                <div className="sec-image"><img src={bglogo} alt="" /></div>
                <div className="sec-container">
                    <div className="community">
                        <h3>Community Driven</h3>
                        <p>At Saitama2.0, we believe that strength lies in unity. Join our vibrant community of 
                            heroes who share a common vision of using cryptocurrency as a force for good. </p>                
                    </div>
                <div className="Roadmap">
                    <h3>Superpowered Roadmap</h3>
                    <p>Our roadmap is filled with exciting milestones and initiatives that will 
                    further enhance the Saitama2.0 ecosystem. From strategic partnerships to innovative developments, 
                    we are constantly working to expand our universe and provide new opportunities </p>                
            </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default Section