import React from "react";
import './skill.css'
import { IoLogoHtml5 } from "react-icons/io";
import { MdCss } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function Skills(){
    return(
      <div id="skill-page" className="skill-page">
         <div className="head-text">My Skills <FaCode size={36} /></div>
         <div className="head-textt">My Skills <FaCode size={24} /></div>
      <div className="skills">
      <p className="context">HTML &CSS <IoLogoHtml5 size={24}/>< MdCss size={24}/><FaBootstrap size={24}/></p>
     <div className="container">
    
  <div className="html">90%</div>
</div>

<p className="context">JS & jQuery < IoLogoJavascript size={24}/></p>
<div className="container">

  <div className="skills css">70%</div>
</div>

<p className="context">React <FaReact size={24} /></p>
<div className="container">

  <div className="skills js">80%</div>
</div>

<p className="context">NodeJS Express EJS <IoLogoNodejs size={24}/></p>
<div className="container">

  <div className="skills php">75%</div>
    
    </div>
    <p className="context">MongoDB <SiMongodb size={24}/> </p> 
<div className="container">

  <div className="skills mongo">70%</div>
    
    </div>
    <p className="context">Java & C < FaJava size={24}/> <FaRegFileCode size={24} /></p>
<div className="container">

  <div className="skills java">80%</div>
    
    </div>
    </div>
      </div>
     
    )
}
export default Skills;