$(document).ready(function(){
    const params = new URLSearchParams(location.search);
    const product_id = params.get('product_id');

    console.log(product_id);

    const product = productList.filter(p => p.id === product_id)[0]

    const productImg = document.getElementById('product-img');
    productImg.src = product.photos[0];

    const productName = document.getElementById('name');
    productName.innerText = product.name;
    const productBrand = document.getElementById('brand');
    productBrand.innerText = product.brand;
    const productDescription = document.getElementById('description');
    productDescription.innerText = product.description;
    const productPrice = document.getElementById('price');
    productPrice.innerText = product.price;

    const productImages = document.getElementsByClassName('previewImg')[0];
    product.photos.forEach((photo,i)=>{
        const imgTag = document.createElement('img')
        imgTag.src = photo;
        if(i == 0){
            imgTag.classList.add('active')
        }else{
            imgTag.classList.add('non-active');
        }
        productImages.appendChild(imgTag)
    })
})

$(document).on('click','.non-active',function(){
    const activeImg = document.getElementsByClassName('active')[0]
    activeImg.classList.add('non-active');
    activeImg.classList.remove('active');

    const clickedImg = this;
    clickedImg.classList.remove('non-active');
    clickedImg.classList.add('active');

    const productImg = document.getElementById('product-img');
    productImg.src = clickedImg.src;
})