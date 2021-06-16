var navBtn = document.getElementsByClassName('nav-menu-btn')[0];

navBtn.addEventListener('click', function() {
    this.classList.toggle('nav-open');
    document.getElementsByClassName('nav-menu')[0].classList.toggle('nav-open')
})

var links = document.getElementsByTagName('a');

for (var i=0; i<links.length; i++) {
    links[i].addEventListener('click', function(e) {
        if (this.getAttribute("href") === '#') e.preventDefault()
    })
}

var freeQuote = document.getElementsByClassName('free-quote');
var overlay = document.getElementsByClassName('free-quote-overlay-fixed')[0];
var popup = document.getElementsByClassName('free-quote-popup')[0];
var closeBtn = document.getElementsByClassName('free-quote-close')[0];

for (var i=0; i<freeQuote.length; i++) {
    freeQuote[i].addEventListener('click', function(e) {
        console.log('clicked')
        overlay.style.display = 'block';
        overlay.style.opacity = 1;
        popup.style.transform = 'translateX(0)';
    })
}

function closePopUp() {
    overlay.style.display = 'none';
    overlay.style.opacity = 0;
    popup.style.transform = 'translateX(100%)';
}

closeBtn.addEventListener('click', closePopUp)
overlay.addEventListener('click', closePopUp)
