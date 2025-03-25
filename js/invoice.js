// Handle checkout button click
document.getElementById('checkout').addEventListener('click', () => {
    // Calculate the total cost
    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    // Calculate charges
    const subtotal = totalCost;
    const tax = subtotal * 0.08; // Assuming 8% tax
    const discount = subtotal > 100 ? subtotal * 0.10 : 0; // Assuming 10% discount for orders over $100
    const total = subtotal + tax - discount;
    
    // Store the invoice data in local storage
    const invoiceData = {
        cart: cart,
        subtotal: subtotal,
        tax: tax,
        discount: discount,
        total: total
    };
    localStorage.setItem('invoiceData', JSON.stringify(invoiceData));
    
    // Display the total cost
    alert(`Total cost: $${totalCost.toFixed(2)}`);
    
    // Clear the cart
    cart = [];
    
    // Update the cart display
    updateCartDisplay();
    
    // Redirect to the invoice page
    window.location.href = 'invoice.html';
});


// Retrieve the invoice data from local storage
const invoiceData = JSON.parse(localStorage.getItem('invoiceData'));

// Display the invoice data
document.getElementById('invoice-subtotal').textContent = `Subtotal: $${invoiceData.subtotal.toFixed(2)}`;
document.getElementById('invoice-tax').textContent = `Tax: $${invoiceData.tax.toFixed(2)}`;
document.getElementById('invoice-discount').textContent = `Discount: $${invoiceData.discount.toFixed(2)}`;
document.getElementById('invoice-total').textContent = `Total: $${invoiceData.total.toFixed(2)}`;

// Display the cart contents
const cartDisplay = document.getElementById('cart-display');
cartDisplay.innerHTML = '';
invoiceData.cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
        <h4>${item.name}</h4>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
    `;
    cartDisplay.appendChild(cartItem);
});
