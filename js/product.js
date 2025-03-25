// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Initialize an empty cart
let cart = [];

// Handle button clicks
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product name and price from the button's data attributes
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Add the product to the cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Display the updated cart contents
    console.log('Cart:', cart);

    // Update the cart display
    updateCartDisplay();
  });
});

// Update the cart display
function updateCartDisplay() {
  const cartDisplay = document.getElementById('cart-display');
  if (cartDisplay) {
    cartDisplay.innerHTML = '';

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <h4>${item.name}</h4>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
      `;
      cartDisplay.appendChild(cartItem);
    });
  }
}

// Handle checkout button click
document.getElementById('checkout').addEventListener('click', () => {
  // Calculate the total cost
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Display the total cost
  alert(`Total cost: $${totalCost.toFixed(2)}`);

 // Store the cart data in local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Clear the cart
    cart = [];

    // Update the cart display
    updateCartDisplay();

    // Redirect to the invoice page
    window.location.href = 'invoice.html';
});

   
