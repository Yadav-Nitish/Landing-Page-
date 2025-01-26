const nextbutton = document.querySelector(`.next-btn`);
const video = document.querySelector(`.hero-video`);

const movielist = [`videos/hero-1.mp4`,`videos/hero-2.mp4`,`videos/hero-3.mp4`,`videos/hero-4.mp4`]

let index=0;

nextbutton.addEventListener(`click`,function(){
    
    index++;
    video.src= movielist[index];
   

    if(index === 3)
    {   
        // to create a lopp of image , restarting video of 0 index
        index = -1;
    }
    
})