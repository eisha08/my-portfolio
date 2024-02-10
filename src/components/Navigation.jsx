import React ,{useContext,useState} from "react";
import Toggle from "./Toggle";
import { FaLaptopCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { themeContext } from "../Context";
function Navigation(){
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const [showNavbar,setshowNavbar]=useState(false);
    return(
        <div className="navbar">
            <div className="logoside">
                <div className="logoName">eishacodes <span><FaLaptopCode /></span> </div>
                  <span><Toggle/></span>
            </div>
            <div className="nav">
                <div className="navitems" >
                    <ul className="listNav">
    
                        <a  style={{
            background:darkMode? 'black':'',
            color:darkMode? 'white':''}} className="a-link" href="#"><li className="list-items" >Home  </li></a>
                        <a  style={{
            background:darkMode? 'black':'',
            color:darkMode? 'white':''}}  className="a-link" href="#about-page"><li className="list-items" >About</li></a>
                        <a  style={{
            background:darkMode? 'black':'',
            color:darkMode? 'white':''}} className="a-link" href="#skill-page"><li className="list-items" >Skills</li></a>
                        <a   style={{
            background:darkMode? 'black':'',
            color:darkMode? 'white':''}} className="a-link" href="#project-page"><li className="list-items" >Work</li></a>
                        

                    </ul>
                </div>
              <a href="#form-page"><button className="button">Contact</button></a>  
             
             
            </div>
        </div>
    )
}
export default Navigation;