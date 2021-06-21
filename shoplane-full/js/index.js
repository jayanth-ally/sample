const loadData = async () => {
    const productList = await getDataFromApi("https://5d76bf96515d1a0014085cf9.mockapi.io/product");
    const clothing = document.getElementById('clothing')
    const accessories = document.getElementById('accessories');

    productList.forEach((product,i) => {

        const productCard = document.createElement('div');
        productCard.classList.add('card');

        const productAnchor = document.createElement('a');
        productAnchor.href="product.html?product_id="+product.id;



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

        productAnchor.appendChild(productImgContainer);
        productAnchor.appendChild(productDetails);

        productCard.appendChild(productAnchor);

        if(i < 5){
            clothing.appendChild(productCard);
        }else{
            accessories.appendChild(productCard);
        }
    })
}

$(document).ready(function(){
    loadData();
    $("#banner").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      });
});