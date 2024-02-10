import React, { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { themeContext } from "../Context";
function Toggle(){
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode;
    const handleClick = () =>{
        theme.dispatch({type:'toggle'})
    }
    return(
        <div className="toggle" onClick={handleClick}>
             <FaRegMoon />
            <IoSunnyOutline />
            <div className="t-button"
            style={darkMode?{left:'2px'}:{right:'2px'}}> 
            
            </div>
           
        </div>
    )
}
export default Toggle;