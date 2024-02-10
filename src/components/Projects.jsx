import React from "react";
import './card.css'

 import blog from "./blog.jpeg";
import music from "./music.jpeg";
import todo from "./todo.jpg";
import qr from "./qr.png";
import form from "./form.png";
import recipe from "./recipe.jpeg";


function Projects(){
    return(
        
            
            <div id="project-page" className="main">
  <div className="project-head">My Projects</div> 
  <ul class="cards2">
    <li class="cards_item">
      <div class="card2">
        <div class="card_image"><img className="rec-img" src={recipe} alt="" /></div>
        <div class="card_content">
          <h2 class="card_title">Taco Recipe Site</h2>
          <p class="card_text">A basic site made using EJS,NodeJS,Express,Html and CSS showing different taco recipes.You can see various recipes by clicking the given good images.</p>
         <a className="pro" href="https://github.com/eisha08/TacoRecipe"><button class="btn card_btn">View Project</button></a> 
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card2">
        <div class="card_image"><img className="form-img" src={form} alt="" /></div>
        <div class="card_content">
          <h2 class="card_title">Form with Database</h2>
          <p class="card_text">This site mainly shows the database framework(MongoDB).A user can register and only registered user can login.Its frontend is made from HTML,Css joined through EJS.</p>
          <a className="pro" href="https://github.com/eisha08/registrationform"><button class="btn card_btn">View Project</button></a>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card2">
        <div class="card_image"><img className="qr-img" src={qr} alt="" /></div>
        <div class="card_content">
          <h2 class="card_title">QR-Generator</h2>
          <p class="card_text">A backend project made mainly with nodejs in which a qr is generated each time a valid input is given.You can redirect to that link through that qr.</p>
          <a className="pro" href="https://github.com/eisha08/QR-Generator"><button class="btn card_btn">View Project</button></a>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card2">
        <div class="card_image"><img src={blog} alt="" /></div>
        <div class="card_content">
          <h2 class="card_title">Blog Site</h2>
          <p class="card_text">Write and post your blogs on this exclusive website.It is underprocess to add its database.</p>
         <a className="pro" href="https://github.com/eisha08/blogSite"><button class="btn card_btn">View Project</button></a> 
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card2">
        <div class="card_image"><img src={music} alt="" /></div>
        <div class="card_content">
          <h2 class="card_title">Music Player</h2>
          <p class="card_text">Exclusive Music Player in which you can see the talent of underground rappers by listening to their hits.</p>
         <a className="pro" href="https://github.com/eisha08/Music-Player"><button class="btn card_btn">View Project</button></a> 
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card2">
        <div class="card_image"><img src={todo} alt="" /></div>
        <div class="card_content">
          <h2 class="card_title">Keeper App</h2>
          <p class="card_text">Add your daily task to this new keeper app made up using React and update whether its done or not.</p>
          <a className="pro" href="https://github.com/eisha08/keeperApp"><button class="btn card_btn">View Project</button></a>
        </div>
      </div>
    </li>
  </ul>
</div>
    )
}
export default Projects;