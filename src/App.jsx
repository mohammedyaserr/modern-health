import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner-section";
import Firstsec from "./components/First-sec";
import Running from "./components/Running-section";
import Second from "./components/Second-section";
import Foundation from "./components/Our-Foundation";
import Experice from "./components/Experiece";
import Thrive from "./components/Thrive-sec";
import Footer from "./components/Footer";
import Personal from "./components/Personal-health";
const App = () =>{
   return (
    <>
      <Nav/>
      <Banner/>
      <Firstsec/>
      <Running/>
      <Second/>
      <Foundation/> 

      <Experice/>

      <Personal/>
      <Thrive/>
      <Footer/>
    </>
  )
}
 

export default App
