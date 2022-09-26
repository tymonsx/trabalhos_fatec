
       //executa o dropdow com o efeito do collapsible que é um colapso de conteudos
       
       var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }


//botao
function myFunction() {  //informa o ativo quando clicar
    alert("Aproveite a Música!!");
  }

        //slide
//indices dos do Slide para executar com algumas funções
        let slideIndex = 1; 
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n); //mostra os slide caso for adicionar
        }

        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n); //slide atuais
        }

        function showSlides(n) {  //realiza o movimento dos slides
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        var i = setInterval(function () {
    
            clearInterval(i);
          
            // O código desejado é apenas isto:
            document.getElementById("loading").style.display = "none";
            document.getElementById("conteudo").style.display = "inline";
        
        }, 4000)
        