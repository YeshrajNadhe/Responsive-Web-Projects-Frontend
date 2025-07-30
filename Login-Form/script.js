document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('error');

  // Dummy login (replace with real backend later)
  if (username === 'admin' && password === 'admin123') {
    alert('Login successful!');
    error.textContent = '';
  } else {
    error.textContent = 'Invalid username or password';
  }
});
