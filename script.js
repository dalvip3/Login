document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const validUsername = "admin";
  const validPassword = "Pass@123";

  const message = document.getElementById("message");

  if (username === validUsername && password === validPassword) {
    message.style.color = "green";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";

	
  }
});
