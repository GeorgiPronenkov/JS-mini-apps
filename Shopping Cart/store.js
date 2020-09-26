if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
//3
function ready() {
    
    const removeCartItemBtns = document.getElementsByClassName('btn-danger');
    //console.log(removeCartItemBtns);
    for (const index = 0; index < removeCartItemBtns.length; index++) {
        const button = removeCartItemBtns[index];
        button.addEventListener('click', removeCartImem);
    }

    const quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (const i = 0; i < quantityInput.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}

//4
function removeCartImem(event) {
    
    const btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
    
    updateCartTotal();
}

//5
function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value < 0) {
        input.value = 1;
    }

    updateCartTotal();
}

//2.update cart total
function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows  = cartItemContainer.getElementsByClassName('cart-row');
    const total = 0;

    for (const i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName('cart-price')[0];
        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        const price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}