import React from "react";
import('../components/banner-section.css');

const Banner = () => {

    return (
        <>
            <div className="banner-img">
                <div className="banner-text">
                    <h1>The Global Standard in Mental Health</h1>
                    <p>Modern Health delivers evidence-based, equitable mental health services worldwide — from self-guided tools to crisis care — ensuring our members have the right support wherever in the world they’re located.</p>
                    <div className="banner-input-box">
                    <input type="text" placeholder="How can we help?" className="banner-box"/>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Banner