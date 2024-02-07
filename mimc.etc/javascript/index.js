document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

   let menuselect = document.querySelector(".menu-dropdown");

   let closepopup = document.querySelector(".closepopup");

   let ricercaLogo = document.querySelector(".logo-ricerca");

   let ricercaNormale = document.querySelector(".ricerca-normale");

   let closericerca = document.querySelector(".closericerca");

    menuselect.addEventListener("click", (event) => {
        document.querySelector(".popup").style.display = 'block';
        document.querySelector(".popup").style.left = '0';
        document.querySelector("body").style.overflow = 'hidden';
        
    });

    closepopup.addEventListener("click", (event) => {
        document.querySelector(".popup").style.display = 'none';
        document.querySelector("body").style.overflow = 'auto';

    });

    ricercaNormale.addEventListener("click", (event) => {
        document.querySelector(".ricerca").style.display = 'block';
        document.querySelector(".ricerca").style.left = '0';
        document.querySelector("body").style.overflow = 'hidden';
        
    });

    ricercaLogo.addEventListener("click", (event) => {
        document.querySelector(".ricerca").style.display = 'block';
        document.querySelector(".ricerca").style.left = '0';
        document.querySelector("body").style.overflow = 'hidden';
        
    });

    closericerca.addEventListener("click", (event) => {
        document.querySelector(".ricerca").style.display = 'none';
        document.querySelector("body").style.overflow = 'auto';

    });


  });