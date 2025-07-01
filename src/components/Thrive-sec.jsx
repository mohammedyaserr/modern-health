import React from "react";
import './thrive-sec.css'

import thrivelogo from '../assets/thrivlogo.svg'

const Thrive =()=>{
    return(
        <>
            <div className="thrive-banner">
                <img src= {thrivelogo} alt="" />
                <h1>Ready for your workplace to thrive?</h1>
                <div className="thrive-btn">
                    <p>Talk to our team</p>
                </div>
            </div>
        </>
    )
}

export default Thrive