const dec = document.getElementsByClassName("product__quantity-control_dec");
const inc = document.getElementsByClassName("product__quantity-control_inc");
const basket = document.querySelector(".cart__products");
const buttons = document.getElementsByClassName("product__add");
Array.from(dec).forEach(decEl => {
    decEl.onclick = () => {
        const valueEl = decEl.closest(".product__quantity-controls").querySelector(".product__quantity-value");
        const value = +valueEl.textContent;
        if (value > 0) valueEl.innerText = value - 1;
    };
});
Array.from(inc).forEach(incEl => {
    incEl.onclick = () => {
        const valueEl = incEl.closest(".product__quantity-controls").querySelector(".product__quantity-value");
        const value = +valueEl.textContent;
        valueEl.innerText = value + 1;
    };
});
Array.from(buttons).forEach(button => {
    button.onclick = () => {
        const parent = button.closest(".product");
        const id = parent.dataset.id;
        const value = parent.querySelector(".product__quantity-value").innerText;
        const img = parent.querySelector(".product__image").getAttribute("src");
        const currentProduct = basket.querySelector(`[data-id="${id}"]`);
        if (currentProduct) {
            const countEl = currentProduct.querySelector(".cart__product-count");
            const count = +countEl.innerText;
            countEl.innerText = count + 1;
        } else {
            basket.innerHTML += `<div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${img}">
        <div class="cart__product-count">${value}</div>
    </div>`
        };
    };
});