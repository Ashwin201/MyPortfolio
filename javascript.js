// Code for Animation
ScrollReveal({
    reset:true,
    duration:1300,
    distance:'38px',
   });
   ScrollReveal().reveal('   .role ,  .image  ', {delay:100, distance:'65px' , origin:'top' });
   ScrollReveal().reveal('  .menutxt  ', {delay:100, distance:'65px', origin:'bottom' });

    ScrollReveal().reveal('  .info_img, .line , .skill_card ,  .title ', {delay:200,duration:850,   origin:'left' });
   ScrollReveal().reveal('  .info ', {delay:200, duration:850 , origin:'right' });
   ScrollReveal().reveal('  .service_card ,.project_card , .input_name  , .name , .email , .msg , .send ,.connect ', {delay:200, duration:850, origin:'bottom' });


//For dark and light theme 

var themeIcon=document.querySelector(".theme_icon");
themeIcon.onclick=()=>{
    document.body.classList.toggle("dark_theme");

    if( document.body.classList.contains("dark_theme"))
    {
        themeIcon.src="sun.png";
        document.querySelector("html").style.backgroundColor="rgb(17,17,17)";
    }
    else{
        themeIcon.src="moon.png";
        document.querySelector("html").style.backgroundColor="#dcf2e1";
        document.querySelector(".service_card").style.backgroundColor="var(--secondary-color)";

    }
}




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


















