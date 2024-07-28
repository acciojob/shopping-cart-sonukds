document.getElementById('add').addEventListener('click', function() {
    const itemNameInput = document.getElementById('item-name-input');
    const itemPriceInput = document.getElementById('item-price-input');
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        const tableBody = document.getElementById('shopping-list');
        const newRow = document.createElement('tr');

        const itemNameCell = document.createElement('td');
        itemNameCell.textContent = itemName;
        itemNameCell.setAttribute('id', 'item');
        newRow.appendChild(itemNameCell);

        const itemPriceCell = document.createElement('td');
        itemPriceCell.textContent = `$${itemPrice.toFixed(2)}`;
        itemPriceCell.setAttribute('id', 'price');
        newRow.appendChild(itemPriceCell);

        const grandTotalRow = tableBody.lastElementChild;
       
	}