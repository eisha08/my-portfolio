import React,{ useContext } from "react";
import { themeContext } from "../Context";
function Footer(){
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
       
        <footer>
            <p className="foot" style={{
            background:darkMode? 'black':'',
            color:darkMode? 'white':''}} >  Made by Eisha © Copyright 2024. All rights reserved.</p>
        </footer>
    )
}
export default Footer;