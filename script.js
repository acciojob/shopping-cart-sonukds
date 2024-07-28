document.getElementById('add').addEventListener('click', function() {
    const itemNameInput = document.getElementById('item-qty-input');
    const itemPriceInput = document.getElementById('item-price-input');
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value);

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        const cartBody = document.getElementById('cart-body');
        const newRow = document.createElement('tr');

        const itemCell = document.createElement('td');
        itemCell.textContent = itemName;
        newRow.appendChild(itemCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = itemPrice.toFixed(2);
        newRow.appendChild(priceCell);

        cartBody.insertBefore(newRow, cartBody.lastElementChild);

        const totalElement = document.getElementById('total');
        const currentTotal = parseFloat(totalElement.textContent);
        totalElement.textContent = (currentTotal + itemPrice).toFixed(2);

        itemNameInput.value = '';
        itemPriceInput.value = '';
    } else {
        alert('Please enter a valid item name and price.');
    }
});
