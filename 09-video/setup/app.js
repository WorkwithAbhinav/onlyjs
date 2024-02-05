const btn = document.querySelector('.switch-btn')
const vdo = document.querySelector('.video-container');

btn.addEventListener('click', ()=>{
    if(!btn.classList.contains('slide')){
        vdo.pause();
        btn.classList.add('slide');
    }else{
        vdo.play();
        btn.classList.remove('slide');
    }
});

const preloader = document.querySelector(".preloader");
window.addEventListener("load" , ()=>{
    preloader.classList.add("hide-preloader");
})