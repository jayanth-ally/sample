$(document).ready(function(){
    const cart = getCart();
    const cartCount = document.getElementById('number-of-item');
    cartCount.innerText = getCartCount();

    const cartContainer = document.getElementById('cart-item-container');

    let totalPrice = 0;
    cart.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('item')

        const itemImg = document.createElement('img');
        itemImg.src = item.preview;
        
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('detail');
        const heading = document.createElement('h3');
        heading.innerText = item.name;
        const itemCount = document.createElement('p');
        itemCount.innerText = 'x'+item.quantity;
        const itemPrice = document.createElement('p');
        itemPrice.innerText = 'Amount: '+item.quantity*item.price;

        totalPrice += item.quantity*item.price;
        
        itemDetails.appendChild(heading);
        itemDetails.appendChild(itemCount);
        itemDetails.appendChild(itemPrice);
        
        cartItem.appendChild(itemImg);
        cartItem.appendChild(itemDetails)

        cartContainer.appendChild(cartItem);
    });

    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = totalPrice
})