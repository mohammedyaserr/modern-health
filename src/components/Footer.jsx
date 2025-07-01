import React from "react";
import './footer.css'

import flogo from '../assets/footer-main-logo.png'
import playstore from '../assets/play-store.png'
import appstore from '../assets/app-store.png'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-first-sec">
                    <img src={flogo} alt="" />

                    <div className="footer-newsletter-container">
                        <p>Modern Health Newsletter</p>
                        <div className="footer-newsletter-box-and-button">
                            <input type="text" className="footer-newsletter-box" />

                            <input type="button" value="sign up!" className="btn" />
                        </div>
                    </div>

                    <div className="applications-container">
                        <div className="footer-application-store">
                            <img src={playstore} alt="" />
                        </div>
                        <div className="footer-application-store">
                            <img src={appstore} alt="" />
                        </div>

                    </div>

                </div>

                <div className="footer-second-sec">

                    <div className="footer-line">
                        <hr />
                    </div>

                    <div className="footer-sec-main-container">

                        <div className="footer-content">
                            <p>The comprehensive mental health care platform for enterprises around the world</p>

                            <div className="footer-icons">
                                {/* <img src={} alt="" />
                                <img src={} alt="" />
                                <img src={} alt="" /> */}
                            </div>

                        </div>

                        <div className="footer-texts">
                            <h3>Who we serve</h3>
                            <p>Employers</p>
                            <p>Consultants</p>
                            <p>Members</p>
                            <p>Providers</p>
                            <p>Health Plans</p>
                        </div>

                        <div className="footer-texts">
                            <h3>Solutions</h3>
                            <p>Workplace tools</p>
                            <p>Economic value</p>
                            <p>Global Coverage</p>
                            <p>Pathways™</p>
                        </div>

                        <div className="footer-texts">
                            <h3>Resources</h3>
                            <p>Circles</p>
                            <p>Blog</p>
                            <p>Case Studies</p>
                            <p>Events</p>
                        </div>

                        <div className="footer-texts">
                            <h3>Company</h3>
                            <p>Careers</p>
                            <p>DEIB</p>
                            <p>Press</p>
                        </div>

                        <div className="footer-addres">
                            <h3>Contacy Us</h3>
                            <p>Talk to a Consultant</p>
                            <p>650 California St.Floor 7San Francisco, CA 94108 Office 07-128</p>

                        </div>


                    </div>



                </div>

                <div className="footer-copyright-container">
                    <div className="footer-copyright-txt">
                        <p>©2025 Modern Life, Inc. All rights reserved</p>
                        <p>Compliance|Privacy|HIPAA Notice|Security | Terms of Use| System Status|Cookie Preferences|Do Not Sell My Personal Information</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer