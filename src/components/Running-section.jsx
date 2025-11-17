import React from "react";
import('../components/runnig-section.css')

import logo1 from '/src/assets/runnig-logo(1).png'
import logo2 from '/src/assets/runnig-logo(2).png'
import logo3 from '/src/assets/runnig-logo(3).png'
import logo4 from '/src/assets/runnig-logo(4).png'
import logo5 from '/src/assets/runnig-logo(5).png'
import Slider from "react-infinite-logo-slider";

const Running = () => {
    return (
        <>
            <div className="run-container">
                <p>The world's top companies choose Modern Health</p>
                <div className="run-logos">
                    <Slider
                        width="250px"
                        duration={15}
                        pauseOnHover={false}
                        blurBorders={false}
                        blurBorderColor={'#000'}>
                    
                        <Slider.Slide>
                            <img src={logo5} style={{objectFit:"contain",height:"20px"}} />
                        </Slider.Slide>

                        <Slider.Slide>
                            <img src={logo2} />
                        </Slider.Slide>

                        <Slider.Slide>
                            <img src={logo3} />
                        </Slider.Slide>

                        <Slider.Slide>
                            <img src={logo5} style={{objectFit:"contain",height:"20px"}} />
                        </Slider.Slide>

                        <Slider.Slide>
                            <img src={logo4} />
                        </Slider.Slide>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Running
