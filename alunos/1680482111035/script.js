const linksSection = document.querySelectorAll('header nav ul li a')
const btnFixed = document.querySelector('#btn-fixed-js')

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const initPosition = section.offsetTop; 
  window.scrollTo({
    top: initPosition,
    behavior: "smooth",
  })
}

function home(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function buttonTop() {
  if(window.pageYOffset > 88) {
    btnFixed.classList.add('active')
  }else {
    btnFixed.classList.remove('active')
  }
}

//Registra a altura de cada section e permite 'escrolar' suavemente ate a section que esta vinculada ao itens do header
linksSection.forEach( link => {
  link.addEventListener('click', scrollToSection)
})

//Botao no canto inferior direito para retornar ao topo
btnFixed.addEventListener('click', home);

//Vigia o header no topo, e quando ele some, é possivel ver o botao fixado no canto inferior 
document.addEventListener('scroll', buttonTop);