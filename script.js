//your JS code here. If required.
  const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const existingBtn = document.getElementById('existing');
    const form = document.getElementById('loginForm');

    // Show "Login as existing user" if credentials exist
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
      existingBtn.style.display = 'inline';
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      const remember = checkbox.checked;

      alert(`Logged in as ${username}`);

      if (remember) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingBtn.style.display = 'inline';
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingBtn.style.display = 'none';
      }

      form.reset();
    });

    existingBtn.addEventListener('click', () => {
      const existingUsername = localStorage.getItem('username');
      if (existingUsername) {
        alert(`Logged in as ${existingUsername}`);
      }
    });