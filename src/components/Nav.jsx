import React from "react";
import ('../components/nav.css');
import img from '/src/assets/logo-white.svg'
import userlistlogo from '/src/assets/account (1).png'
import dropdown from '/src/assets/down-arrow.png'

const Nav = () => {
    return(
        <>
            <div className="navbar">

                <div className="nav-img-container">
                    <img src={img} alt="" />
                </div>

                <div className="nav-side-items-container">
                    <div className="nav-user-list">
                        <img src={userlistlogo} alt="" />
                        <img src={dropdown} alt="" />
                        <hr />
                    </div>
                    <div className="menu">
                        <p>Menu +</p>
                    </div>
                    <div className="talkbtn">
                        <p>let's Talk</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Nav