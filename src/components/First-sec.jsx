import React from "react";
import('../components/first-sec.css')
import bluelogo from '/src/assets/blueicon.svg'

const Firstsec = () => {
    return (
        <>
            <div className="fsec-container">
                <div className="fsec-heading-logo">
                    <h1>Solve your greatest business challenges with Modern Health</h1>
                    <img src={bluelogo} />
                </div>
                <div className="fsec-grids">
                    <div className="fsec-gd">
                        <div className="fsec-point">
                            <h1>1</h1>
                        </div>
                        <div className="fsec-gd-heading-para">
                            <h3>Boost productivity and prevent burnout</h3>
                        <p>Equip your workforce with the mental resilience tools they need to combat burnout and maintain peak <br/>performance.</p>
                        </div>
                        
                    </div>
                    <div className="fsec-gd">
                        <div className="fsec-point">
                            <h1>2</h1>
                        </div>
                        <div className="fsec-gd-heading-para">
                            <h3>Optimize operational efficiency</h3>
                        <p>Optimize your organization's performance with our sustainable mental health model. We address long-term needs, reduce absenteeism, boost retention, and enhance operational efficiency—all while improving your bottom line.</p>
                        </div>
                        
                    </div>
                    <div className="fsec-gd">
                        <div className="fsec-point">
                            <h1>3</h1>
                        </div>
                        <div className="fsec-gd-heading-para">
                            <h3>Attract and retain top talent</h3>
                        <p>Elevate your employer brand and attract top-tier talent in a competitive marketplace by showcasing your commitment to employee well-being through comprehensive mental health support.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Firstsec