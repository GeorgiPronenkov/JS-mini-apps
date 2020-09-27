if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
//3.
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

    //add to cart buttons
    const addToCartBtns = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartBtns.length; i++) {
        const button = addToCartBtns[i];
        button.addEventListener('click', addToCartClicked);
    } 
}

function addToCartClicked(event) {
    const button = event.target;
    const shopItem = button.parentElement.parentElement;
    const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    const imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;

    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    //create a row for cart item
    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    //add div to cart items
    const cartItems = document.getElementsByClassName('cart-items')[0];
    const cartItemNames = document.getElementsByClassName('cart-item-title');
    for (const i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('The item is already added to the cart!');
            
            return;
        }
        
    }
    const cartRowContents = `
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                            <span class="cart-item-title">${title}</span>
                        </div>
                        <span class="cart-price cart-column">${price}</span>
                        <div class="cart-quantity cart-column">
                            <input class="cart-quantity-input" type="number" value="2">
                            <button class="btn btn-danger" type="button">REMOVE</button>
                        </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow); //append it to the end of cart items
    cartRow.getElementsByClassName('btn-danger')[0]
           .addEventListener('click', removeCartImem);
    cartRow.getElementsByClassName('cart-quantity-input')[0]
           .addEventListener('change', quantityChanged);       
}

//4.
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
    //round to 2 digits
    total.Math.round(total * 100) / 1000;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}