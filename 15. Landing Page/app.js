const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav_links');
console.log(menu)
console.log(nav)
menu.addEventListener('click',()=>{
    nav.classList.toggle('active');
})