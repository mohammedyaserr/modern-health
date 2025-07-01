import React from "react";
import './second-section.css';

import arrowr from '../assets/arrow (1).png'
import arrowl from '../assets/right-arrow.png'

import rsmlogo from '../assets/rsm.png';
import karken from '../assets/karken.png';



const Second = () => {
    return (
        <>
            <div className="sec-container">

                <div className="headings">
                    <div className="sec-headings-and-para">
                        <p>Testimonials</p>
                        <h3>Hear directly from our customers</h3>
                    </div>
                    <div className="sec-btn-container">
                        <button className="sec-arrow-btn">
                            <img src={arrowr} alt="" />
                        </button>
                        <button className="sec-arrow-btn">
                            <img src={arrowl} alt="" />
                        </button>
                    </div>
                </div>

                <div className="sec-div-container">

                    <div className="sec-div">


                        <iframe  src="https://www.youtube.com/embed/sxqjMcLG9yE?si=ygJcbBhovGDT79Jx" frameborder="
                            " allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                        </iframe>

                        <div className="logo-text-container">

                            <div className="sec-logo">
                                <img src={rsmlogo} />
                            </div>

                            <div className="sec-txt">
                                <p className="bold">Global Wellbeing Manager Rick Edgerton</p> <p>discusses business impact, productivity, turnover, burnout, how associates deliver service, how people show-up to work, stigma, recruiting, retention, value to people, higher morale</p>                                       
                            </div>
                        </div>
                    </div>


                    <div className="sec-div">


                        <iframe src="https://www.youtube.com/embed/sxqjMcLG9yE?si=ygJcbBhovGDT79Jx" frameborder="
                            " allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                        </iframe>

                        <div className="logo-text-container">

                            <div className="sec-logo">
                                <img src={karken} />
                            </div>

                            <div className="sec-txt">
                                <p className="bold">Wellbeing Manager Ingrid Henderson</p> <p>discusses Pathways, 1:1 coaching, work life balance, ease of use, educate for healthy habits, and clinical research on choice.</p>                                       
                            </div>
                        </div>
                    </div>

                    <div className="sec-div">


                        <iframe src="https://www.youtube.com/embed/sxqjMcLG9yE?si=ygJcbBhovGDT79Jx" frameborder="
                            " allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                        </iframe>

                        <div className="logo-text-container">

                            <div className="sec-logo">
                                <img src={karken} />
                            </div>

                            <div className="sec-txt">
                                <p className="bold">Wellbeing Manager Ingrid Henderson</p> <p>discusses Pathways, 1:1 coaching, work life balance, ease of use, educate for healthy habits, and clinical research on choice.</p>                                       
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        </>
    );
};

export default Second;
