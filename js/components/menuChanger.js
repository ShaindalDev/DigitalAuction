import { load } from "../storage/index.js";
import { logOut } from "../api/auth/logout.js";

function menuChanger() {
  const profileBtn = document.querySelector(".profileBtn");

  const token = load("token");

  if (token) {
    document.getElementById("logoutLink").style.display = "block";
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("profileBtn").style.display = "block";
    document.getElementById("registerBtn").style.display = "none";
  } else {
    document.getElementById("logoutLink").style.display = "none";
    document.getElementById("loginLink").style.display = "block";
    document.getElementById("profileBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "block";
  }
  logOut();
}
menuChanger();
