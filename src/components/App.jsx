import React, { useContext } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills"
import Projects from "./Projects";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Footer from "./Footer";
import { themeContext } from "../Context";
function App(){
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="App"
        style={{
            background:darkMode? 'black':'',
            color:darkMode? 'white':'',
            height:'fit-content',
            
            margin:'0', padding:'0'
        }}
        
        >
           <Navigation/>
         <Home/>  
         <About/>  
         <Skills />  
         <Projects/>   
         <Contact/>
         <Footer/>
        </div>
    )
}
export default App;