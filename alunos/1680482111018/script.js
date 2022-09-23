const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >0); /*Evento javascript que, quando mexer o scroll, o fundo do header muda a cor*/
});

let menu=document.querySelector('#hamburguer-menu');
let navbar=document.querySelector('.navbar');

menu.onclick=() => { /*Quando clicar, será aberto o ícone hamburguer*/
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};

window.onscroll=()=>{ /*Quando mover o scroll, será fechado o ícone hamburguer*/
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}