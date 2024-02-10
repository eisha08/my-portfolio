import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import perfect from '../components/perfect.jpg';
import e from '../components/e.jpg';
import Typewriter from "typewriter-effect";
import Resume from './eisharesume1.pdf'
function Home(){

    return(
        <div id="home-page" className="intro">
            <div className="left-intro">
                <div className="intro-content">
                     <span className="name" > <strong>Hi,This is Eisha</strong></span>
                <span className="prof">I am a<Typewriter options={{strings: ["Web Developer", "Tech Enthusiast", "Cricket Lover"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            /></span>
                <span className="intro-text">From crafting responsive user interfaces to optimizing server-side performance, I thrive in the dynamic world of web development</span>
                </div>
                <a href={Resume}><button className="intro-button" >Resume</button></a>
               
               <div className="socialmedia-icons">
               <span><a  href="https://github.com/eisha08"><FaGithub size={48} color="rgb(179, 54, 179)"  /></a>   </span>
               <span><a href="https://www.linkedin.com/in/eisha-kumari-4bb6b9260/"> <FaLinkedin size={48}  color="rgb(179, 54, 179)" /></a>    </span>
              <span><a  href="https://auth.geeksforgeeks.org/user/eishacodes0"><SiGeeksforgeeks size={48}  color="rgb(179, 54, 179)" /></a>    </span> 
               <span><a  href="https://www.instagram.com/stories/imperfect_isha/"><FaInstagram size={48}  color="rgb(179, 54, 179)" /></a></span>
               </div>
               <div className="socialmedia-icons2">
               <span><a  href="https://github.com/eisha08"><FaGithub size={36} color="rgb(179, 54, 179)"  /></a>   </span>
               <span><a href="https://www.linkedin.com/in/eisha-kumari-4bb6b9260/"> <FaLinkedin size={36}  color="rgb(179, 54, 179)" /></a>    </span>
              <span><a  href="https://auth.geeksforgeeks.org/user/eishacodes0"><SiGeeksforgeeks size={36}  color="rgb(179, 54, 179)" /></a>    </span> 
               <span><a  href="https://www.instagram.com/stories/imperfect_isha/"><FaInstagram size={36}  color="rgb(179, 54, 179)" /></a></span>
               </div>
               <div className="socialmedia-iconss">
               <span><a  href="https://github.com/eisha08"><FaGithub size={24} color="rgb(179, 54, 179)"  /></a>   </span>
               <span><a href="https://www.linkedin.com/in/eisha-kumari-4bb6b9260/"> <FaLinkedin size={24}  color="rgb(179, 54, 179)" /></a>    </span>
              <span><a  href="https://auth.geeksforgeeks.org/user/eishacodes0"><SiGeeksforgeeks size={24}  color="rgb(179, 54, 179)" /></a>    </span> 
               <span><a  href="https://www.instagram.com/stories/imperfect_isha/"><FaInstagram size={24}  color="rgb(179, 54, 179)" /></a></span>
               </div>
            </div>
            <div className="right-intro">
                <div className="image1"> <img className="background" src={perfect} alt="" /></div>
               <div className="image2"> <img className="myPhoto" src={e} alt="" /></div>
               
            </div>
        </div>
    )
}
export default Home;