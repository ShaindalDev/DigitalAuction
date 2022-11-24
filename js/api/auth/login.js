// import { apiUrl } from "../constants.js";
// import { headers } from "../authHeader.js";
// import { save } from '../../storage/index.js'

// export async function login(email, password) {
//   const response = await fetch(`${apiUrl}/social/auth/login`, {
//     method: "post",
//     body: JSON.stringify({ email, password }),
//     headers: headers("application/json")
//   })

//   if (response.ok) {
//     const profile = await response.json()
//     save("token", profile.accessToken)
//     delete profile.accessToken
//     save("profile", profile)
//     return profile
//   }

//   throw new Error(response.statusText)
// }

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("login-form-submit");
/**
 * Login function with evenListener.
 * EventListener for when the login button is clicked, sets auth token and email address for use when viewing your own posts on profile page.
 * When credentials are valid redirects you to profile page. 
 */
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  try {
    fetch("https://nf-api.onrender.com/api/v1/auction/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        window.localStorage.setItem("_token", data.accessToken);
        window.localStorage.setItem("_email", data.email);
        window.localStorage.setItem("profile", data.name);
        location.href = "/profile/index.html"
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
});

if (localStorage.getItem("_token")) {
  location.href = "/profile/index.html"
};

let link = document.getElementById("logoutLink")
    link.style.display="none";