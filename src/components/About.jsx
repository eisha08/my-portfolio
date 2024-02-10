import React, { useContext } from "react";
import fgif from './fgif.gif'
import { themeContext } from "../Context";
function About(){
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(

        <div id="about-page" className="about">
             <div className="about-right"><div className="gif-side">
               <img className="gif" src={fgif} alt="" /> </div></div>
            <div className="about-left">
                <div className="left-aboutContent"><span className="about-head">Personal Profile</span>
                <p className="about-para"
            >Versatile Full Stack Developer with expertise in both front-end and back-end technologies. Proficient in designing and implementing scalable and efficient solutions that drive innovation and enhance user experiences. Passionate about staying abreast of emerging technologies to deliver cutting-edge solutions in a dynamic development environment.
                As a developer I am driven by a passion to shape the future,eager to explore, innovate, and leverage technology to create meaningful solutions that transcend boundaries and positively impact the world.</p>
                </div>  
            </div>
           
        </div>
    )
}
export default About;