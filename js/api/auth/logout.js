const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  localStorage.removeItem("_token");
  localStorage.removeItem("_email");
  localStorage.removeItem("profile");
  location.reload();
  
});