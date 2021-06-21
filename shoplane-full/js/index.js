$(document).ready(function(){
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
});