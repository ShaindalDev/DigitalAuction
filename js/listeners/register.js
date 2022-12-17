import { register } from "../api/auth/register.js";

export function setRegisterUserListener() {
  const form = document.getElementById("registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      console.log("this was clicked");
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const userProfile = Object.fromEntries(formData.entries());

      register(userProfile);
    });
  }
}
