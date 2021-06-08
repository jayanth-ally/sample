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

    console.log(productList)

    let clothing = document.getElementById('clothing')
    let accessories = document.getElementById('accessories');

    productList.map((product,i) => {

        let div = document.createElement('div');
        div.classList.add('card');

        let divImg = document.createElement('div');
        divImg.classList.add('img');
        let img = document.createElement('img');
        img.src = product.preview;
        divImg.appendChild(img);

        let details = document.createElement('div');
        details.classList.add('details');

        let h3 = document.createElement('h3');
        h3.innerHTML = product.name;
        let h4 = document.createElement('h4');
        h4.innerHTML = product.brand;
        let h5 = document.createElement('h5');
        h5.innerHTML = "Rs "+product.price;

        details.appendChild(h3);
        details.appendChild(h4);
        details.appendChild(h5);

        div.appendChild(divImg);
        div.appendChild(details);

        if(i < 5){
            clothing.appendChild(div);
        }else{
            accessories.appendChild(div);
        }
    })
});