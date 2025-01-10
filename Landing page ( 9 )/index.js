
// Image change
let foobar = document.getElementById("foodbar-img");

// img1
let img1 = document.getElementById("img1");
img1.addEventListener("click",function change(){

    foobar.setAttribute("src","img1.png")
});

// img2
let img2 = document.getElementById("img2");
img2.addEventListener("click",function change1(){

    foobar.setAttribute("src","img2.png")
});

// img3
let img3 = document.getElementById("img3");
img3.addEventListener("click",function change2(){

    foobar.setAttribute("src","img3.png")
});

// img4
let img4 = document.getElementById("img4");
img4.addEventListener("click",function change3(){

    foobar.setAttribute("src","img4.png")
});







// white background
let light = document.getElementById("white");
light.addEventListener("click", function background(){

    document.body.style.backgroundColor="white";
    document.body.style.color="black";

    for( let i=0;i<navlinks.length;i++)
        {
            navlinks[i].style.color="black";  
        }
});

// black background
let navlinks = document.getElementsByTagName("a");
let dark= document.getElementById("dark");
dark.addEventListener("click", function backroundcolor(){

    document.body.style.backgroundColor="#444";
    document.body.style.color="white";
    
    for( let i=0;i<navlinks.length;i++)
    {
        navlinks[i].style.color="white";  
    }
      

   
});



