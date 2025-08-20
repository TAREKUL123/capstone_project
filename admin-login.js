document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const validUsername = "admin";
    const validPassword = "1234";
  
    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isAdminLoggedIn", "true");
      window.location.href = "admin-dashboard.html";
    } else {
      document.getElementById("error").classList.remove("hidden");
    }
  });
  