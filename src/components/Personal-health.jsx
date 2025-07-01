import React from "react";
import './Personal-health.css'

import left from '../assets/personalized-health-left.png'
import right from '../assets/personalized-right.png'
const Personal = () => {
    return (
        <>
            <div className="personal-container">

                <div className="personal-left-div">
                    <img className="img1"src= {left} alt="" />
                    <img className="img2" src= {right} alt="" />
                    <div className="personal-top-picks">
                        <button className="personal-top-btn">anxiety</button>
                        <button className="personal-top-btn">Low mood</button>
                        <button className="personal-top-btn">New job</button>
                        <button>Communication</button>
                        <button>Mindfullness</button>
                        <button>Professional Growth</button>
                        <button>Burnout</button>
                        <button>Healthy diet</button>
                        <button>Parenting & family</button>
                        <button>Exercise</button>
                    </div>
                </div>

                <div className="personal-right-div">
                    <h3>Personalized health care at scale</h3>
                    <h5>Modern Health provides a robust suite of mental health care offerings to keep employees happy, healthy, and motivated. Here’s where the journey begins.</h5>

                    <div className="personal-drop1">
                        <div className="personal-round-1">
                            <h2>1</h2>
                        </div>
                        <p>Tell us what you need</p>
                    </div>
                    <div className="personal-para2">
                        <p>We take a personalized approach to self-assessment, prioritizing how members prefer to receive care. This allows us to structure a plan that best suits each individual member.</p>
                    </div>
                    <div className="personal-drop1">
                        <div className="personal-round-1">
                            <h2>2</h2>
                        </div>
                        <p>Get connected to care</p>
                    </div>
                    <div className="personal-drop1">
                        <div className="personal-round-1">
                            <h2>3</h2>
                        </div>
                        <p>Assess and adapt</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Personal