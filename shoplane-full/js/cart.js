const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];;
}

const getCartCount = () => {
    const cart = getCart();
    let count = 0;
    cart.forEach((item)=> count += item.quantity);
    return count;
}

const clearCart = () => {
    localStorage.removeItem('cart');
}

const addToCart = (product) => {
    $(document).on('click','#add-to-cart',function(){
        const cart = getCart();
        const index = cart.findIndex((c) => c.id === product.id);
        if(index === -1){
            cart.push({...product,quantity:1})
        }else{
            cart[index].quantity++;
        }
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCart();
    })
}

const updateCart = () => {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = getCartCount();
}

updateCart();