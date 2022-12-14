import { logIn } from "../api/auth/login.js";

export function setLogInFormListener() {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      console.log("this was clicked");
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const userProfile = Object.fromEntries(formData.entries());

      logIn(userProfile);
    });
  }
}
