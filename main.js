import './style.css';

const loginForm = document.getElementById('loginForm');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;

  if (username && password) {
    console.log('Login attempt:', { username, remember });

    const submitButton = e.target.querySelector('.btn-login');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Logging in...';
    submitButton.disabled = true;

    setTimeout(() => {
      alert(`Login successful!\n\nUsername: ${username}\nRemember me: ${remember ? 'Yes' : 'No'}`);
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      loginForm.reset();
    }, 1000);
  }
});

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', function() {
    if (navbarMenu) {
      const isVisible = navbarMenu.style.display === 'flex';
      navbarMenu.style.display = isVisible ? 'none' : 'flex';

      if (!isVisible) {
        navbarMenu.style.position = 'absolute';
        navbarMenu.style.top = '100%';
        navbarMenu.style.left = '0';
        navbarMenu.style.right = '0';
        navbarMenu.style.backgroundColor = 'var(--color-white)';
        navbarMenu.style.flexDirection = 'column';
        navbarMenu.style.padding = '1rem';
        navbarMenu.style.boxShadow = 'var(--shadow)';
        navbarMenu.style.zIndex = '999';
      }
    }

    this.classList.toggle('active');
  });
}

const inputs = document.querySelectorAll('.form-group input');
inputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });

  input.addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');

    if (this.value) {
      this.parentElement.classList.add('filled');
    } else {
      this.parentElement.classList.remove('filled');
    }
  });
});

const forgotPasswordLink = document.querySelector('.forgot-password');
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset functionality would be implemented here.');
  });
}

const registerLink = document.querySelector('.link-register');
if (registerLink) {
  registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Registration page would be displayed here.');
  });
}

const langBtn = document.querySelector('.lang-btn');
if (langBtn) {
  langBtn.addEventListener('click', function() {
    alert('Language selector functionality would be implemented here.');
  });
}
