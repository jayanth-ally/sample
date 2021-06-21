const getOrders = () => {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

$(document).ready(function(){
    const cart = getCart();
    let amount = 0;
    cart.forEach((item)=>{
        amount += item.quantity * item.price;
    })

    const orders = getOrders();
    let lastOrders = [];
    if(orders.length > 4){
        lastOrders = orders.filter((o,i) => orders.length - 1 - i < 4)
    }else{
        lastOrders = orders;
    }
    localStorage.setItem('orders',JSON.stringify([...lastOrders,{amount,cart}]))
    clearCart();
    updateCart();
})