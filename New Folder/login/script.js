document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const toggleLogin = document.getElementById("toggle-login");
    const toggleRegister = document.getElementById("toggle-register");
  
    toggleLogin.addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.classList.add("active");
      registerForm.classList.remove("active");
    });
  
    toggleRegister.addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
    });
  });
  