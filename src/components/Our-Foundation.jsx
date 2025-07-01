import React from "react";
import ('../components/Our-Foundation.css')

import logo1 from '../assets/foundation-logo1.svg'
import logo2 from '../assets/foundation-logo (1).svg'
import logo3 from '../assets/foundation-logo (2).svg'
import logo4 from '../assets/foundation-logo (3).svg'
// import logo4 from '../assets/foundation-logo (4).svg'

const Foundation = () => {
    return (
        <>
        <div className="foundation-cotainer">

            <div className="fountation-banner">

                <div className="foundation-headings">
                        <p>Our Foundation</p>
                        <h3>The Modern Health Difference</h3>
                    </div>

                    <div className="foundation-grids-container">

                        <div className="foundation-grid-item">

                            <div className="foundation-inner-div">

                                <div className="foundation-logo-container">
                                    <img src= {logo1} alt="" />
                                </div>
                                <div className="foundation-div-heading">
                                    <h3>Replace your EAP with what works</h3>
                                </div>
                                <div className="foundation-div-para">
                                    <p>Traditional EAPs overpromise and underdeliver by only reaching 5% of workforces on average. This leaves 95% untreated — driving hidden costs through claims, disability leave, and lost productivity.</p>
                                </div>
                                <div className="foundation-button">
                                    <button>Learn More</button>
                                </div>
                            
                            </div>
                        </div>

                        <div className="foundation-grid-item">

                            <div className="foundation-inner-div">

                                <div className="foundation-logo-container">
                                    <img src= {logo2} alt="" />
                                </div>
                                <div className="foundation-div-heading">
                                    <h3>A truly sustainable care model</h3>
                                </div>
                                <div className="foundation-div-para">
                                    <p>Our comprehensive care philosophy offers a spectrum of solutions designed to generate meaningful outcomes and align with your business needs. We recognize that a one-size-fits-all approach would be both costly and ineffective.</p>
                                </div>
                                <div className="foundation-button">
                                    <button>Our Economic Value</button>
                                </div>
                            
                            </div>
                        </div>

                        <div className="foundation-grid-item">

                            <div className="foundation-inner-div">

                                <div className="foundation-logo-container">
                                    <img src= {logo3} alt="" />
                                </div>
                                <div className="foundation-div-heading">
                                    <h3>Replace your EAP with what works</h3>
                                </div>
                                <div className="foundation-div-para">
                                    <p>Traditional EAPs overpromise and underdeliver by only reaching 5% of workforces on average. <b>This leaves 95% untreated</b> — driving hidden costs through claims, disability leave, and lost productivity.</p>
                                </div>
                                <div className="foundation-button">
                                    <button>Learn More</button>
                                </div>
                            
                            </div>
                        </div>

                        <div className="foundation-grid-item">

                            <div className="foundation-inner-div">

                                <div className="foundation-logo-container">
                                    <img src= {logo4} alt="" />
                                </div>
                                <div className="foundation-div-heading">
                                    <h3>Replace your EAP with what works</h3>
                                </div>
                                <div className="foundation-div-para">
                                    <p>Traditional EAPs overpromise and underdeliver by only reaching 5% of workforces on average. This leaves 95% untreated — driving hidden costs through claims, disability leave, and lost productivity.</p>
                                </div>
                                <div className="foundation-button">
                                    <button>Learn More</button>
                                </div>
                            
                            </div>
                        </div>

                        

                        

                    </div>
            </div>

        </div>
        </>
    )
}

export default Foundation