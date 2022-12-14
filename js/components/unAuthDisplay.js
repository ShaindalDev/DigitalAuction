import { load } from "../storage/index.js";
import { logOut } from "../api/auth/logout.js";

function menuChanger() {
  const token = load("token");

  if (token) {
    document.getElementById("notLoggedIn").style.display = "none";
  } else {
    document.getElementById("notLoggedIn").style.display = "block";
  }
  logOut();
}
menuChanger();
