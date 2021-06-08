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


    const clothing = document.getElementById('clothing')
    const accessories = document.getElementById('accessories');

    productList.map((product,i) => {

        const productCard = document.createElement('div');
        productCard.classList.add('card');

        const productImgContainer = document.createElement('div');
        productImgContainer.classList.add('img');
        const imgTag = document.createElement('img');
        imgTag.src = product.preview;
        productImgContainer.appendChild(imgTag);

        const productDetails = document.createElement('div');
        productDetails.classList.add('details');

        const productName = document.createElement('h3');
        productName.innerHTML = product.name;
        const productBrand = document.createElement('h4');
        productBrand.innerHTML = product.brand;
        const productPrice = document.createElement('h5');
        productPrice.innerHTML = "Rs "+product.price;

        productDetails.appendChild(productName);
        productDetails.appendChild(productBrand);
        productDetails.appendChild(productPrice);

        productCard.appendChild(productImgContainer);
        productCard.appendChild(productDetails);

        if(i < 5){
            clothing.appendChild(productCard);
        }else{
            accessories.appendChild(productCard);
        }
    })
});