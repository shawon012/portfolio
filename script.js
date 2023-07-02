
let nav = document.querySelector('nav');


// Nav Scroll
window.addEventListener('scroll',( )=>{
    nav.classList.toggle('nav-scroll',window.scrollY>0)
})