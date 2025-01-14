
let menubtn = document.getElementById("menu");
let closebtn = document.getElementById("close");
let navlinks= document.querySelector(".nav-links");



menubtn.addEventListener("click",function responsive(){

    navlinks.style.left="0";
})

closebtn.addEventListener("click",function responsiveclose(){

    navlinks.style.left="-100%";
})