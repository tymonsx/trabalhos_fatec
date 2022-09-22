/* Efeito do menu testa e do botao e inicio */
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
        }else{
          $('.navbar').removeClass("sticky");
        }if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show")
        }else{
          $('.scroll-up-btn').removeClass("show")
        }
    });
    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
  });


    /* Efeito das escrita de texto */
    var typed = new Typed(".typing", {
      strings:["Amigo","Medico","Enfermeiro","condutor"],
      typeSpedd: 100,
      backSpeed: 60,
      loop:true
    })
    var typed = new Typed(".typing2", {
      strings:["Amigo","Medico","Enfermeiro","condutor"],
      typeSpedd: 100,
      backSpeed: 60,
      loop:true
    })
});




// Efeito do menu lateral em modo responsivo
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu",
    ".menu li",
  );
  mobileNavbar.init();