import { load } from "../storage/index.js"
import { logOut } from "../api/auth/logout.js"
import { profile } from "../api/constants";

function menuChanger() {
const profileBtn = document.querySelector(".profileBtn");


const token = load("token");

if (token) {
    document.getElementById("logoutLink").style.display = "block";
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("profileBtn").style.display = "block";
} else {
    document.getElementById("logoutLink").style.display = "none";
    document.getElementById("loginLink").style.display = "block";
    document.getElementsByClassName("profileBtn").style.display = "none";
}
logOut();
}
menuChanger();


