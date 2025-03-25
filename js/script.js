
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

const validUsername = 'Venice';
const validPassword = 'Venicefit';

// Initialize a counter to track the number of incorrect login attempts
let incorrectAttempts = 0;

// Add an event listener to the login form
loginForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the username and password input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are valid
  if (username === validUsername && password === validPassword) {
    // Login successful, redirect to the products page
    window.location.href = 'products.html';
  } else {
    // Login failed, increment the incorrect attempts counter
    incorrectAttempts++;

    // Display an error message
    errorMessage.innerText = 'Invalid username or password';

    // If the user has made three incorrect attempts, redirect to the error page
    if (incorrectAttempts === 3) {
      window.location.href = 'error.html';
    }
  }
});

