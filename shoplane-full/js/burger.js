$(document).ready(function(){
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    
    burger.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
    
    burger.classList.remove('toggle');
    nav.classList.remove('nav-active');
    nav.classList.add('nav-active');
})