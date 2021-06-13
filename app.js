const menuresponsive = document.querySelector('.toggle-menu');
const btn = document.querySelector('.icone-toggle');
let linkmenu = document.querySelectorAll('.toggle-menu li a');
let burger = document.querySelector('.burger');

btn.addEventListener('click', ()=>{
    menuresponsive.classList.toggle('hidden');
    menuresponsive.classList.toggle('active-menu');

    if (menuresponsive.classList.contains("active-menu")){
        burger.setAttribute('src', './images/icon-close.svg');
    }else {
        burger.setAttribute('src', './images/icon-hamburger.svg');
    }
    
});
// console.log(linkmenu);
linkmenu.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menuresponsive.classList.toggle('hidden');
    });
});
