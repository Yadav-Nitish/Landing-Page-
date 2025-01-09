

let image = document.getElementById("img1").addEventListener("click",function changeImage() {
     
    let bgImg=document.getElementById("Cover-burger");
    bgImg.setAttribute("src","img1.png");
   
});;

let image1 = document.getElementById("img2").addEventListener("click",function changeImage() {
     
    let bgImg1=document.getElementById("Cover-burger");
    bgImg1.setAttribute("src","img2.png");
   
});;

let image2 = document.getElementById("img3").addEventListener("click",function changeImage() {
     
    let bgImg2=document.getElementById("Cover-burger");
    bgImg2.setAttribute("src","img3.png");
   
});;

let image3 = document.getElementById("img4").addEventListener("click",function changeImage() {
     
    let bgImg3=document.getElementById("Cover-burger");
    bgImg3.setAttribute("src","img4.png").style.width="50px";
   
});;

let image4 = document.getElementById("img5").addEventListener("click",function changeImage() {
     
    let bgImg4=document.getElementById("Cover-burger");
    bgImg4.setAttribute("src","img5.png");
   
});;



function createStars() {

    const starscontainer = document.getElementById(`stars`);
    const windowwidth = window.innerWidth;
    const windowheight = window.innerHeight;

    for(let i = 0; i < 100; i++)
        {

        const star = document.createElement(`div`);
        star.className = `star`;
        // star.style. = `${Math.random() * windowwidth}px`;
        star.style.left = `${Math.random() * windowwidth}px`;
        star.style.top =   `${Math.random() * windowheight}px`;
        starscontainer.appendChild(star);
    }
}

window.addEventListener(`load`,createStars);