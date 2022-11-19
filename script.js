/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
import Typed from 'typed.js';

var options = {
  strings: ['Ashmin Sharma', 'CSE Student','FrontEnd Developer'],
  typeSpeed: 40,
  backspeed:40
};*/





// Code for Animation
ScrollReveal({
    reset:true,
    duration:1000,
    distance:'35px',
   });
   
   ScrollReveal().reveal(' .container ,.section_title ,.col_right,.section_title1, .section_title2 ,.section_title3 ,.section_title4,.about_img, .progress, .service_card ,.project_card , .skill_top, .project_top,.service_top,.input_name  , .name , .email , .msg , .send ,.connect ', {delay:100 ,origin:'bottom' });




   
//Code for the  Hamburger icon in javascript


const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");

}))

