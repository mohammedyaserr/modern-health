import React from "react";
import './Experience.css'
import nextdoorlogo from '../assets/experience-slider-logo.svg'
import quoteslogo from '../assets/experience-slider-qoutes.png'


const Experice = () => {
    return (
        <>
            <div className="experience-container">

                <div className="experience-headings">
                    <p>Experiences</p>
                    <h3>Discover what our customer champions have to say</h3>
                </div>
                <div className="experience-slider-container">

                    <div className="experience-slider">

                        <div className="experience-slider-txt">
                            <div className="experience-slider-img">
                                <img src={nextdoorlogo} alt="" />
                                <img src={quoteslogo} class="quotes" />
                            </div>
                            <p>“Providing support across the organization required a partner with the ability to reach everyone, regardless of location, language preference, or level of need. Modern Health’s approach to mental health allowed us to frame this resource as something for everyone.”</p>
                            <h4>Beth Steinberg</h4>
                            <h6>Head of People at Nextdoor</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Experice