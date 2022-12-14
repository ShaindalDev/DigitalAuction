import { API_MAIN_URL } from "../constants.js";

const action = "/auth/register";
const method = "POST";

export async function register(userProfile) {
  const registerURL = `${API_MAIN_URL}${action}`;

  try {
    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(userProfile),
    });

    const result = await response.json();
    console.log(response);

    return result;
  } catch (error) {
    console.log(error);
  }
}

// const registerForm = document.getElementById("registerForm");
/**
 * This is the register function with evenListener on the register button.
 * this takes info from the registration form and register it to the API, if all is valid a user is registered to the application.
 */
// registerForm.addEventListener("submit", (event) => {
//   console.log('test click')
//   event.preventDefault();
//   const userName = registerForm.registerName.value;
//   const email = registerForm.registerEmail.value;
//   const password = registerForm.registerPassword.value;
//   const avatar = registerForm.registerAvatar.value
//   try {
//     fetch(`${apiUrl}/auth/register`, {
//       method: "POST",
//       body: JSON.stringify({
//         name: userName,
//         email: email,
//         password: password,
//         avatar: avatar
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         window.localStorage.setItem("_token", data.accessToken);
//         location.href = "/profile/index.html";
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// });

// *****Manuel registration of a profile ******
// fetch('https://nf-api.noroff.dev/api/v1/auction/auth/register', {
// method: 'POST',
// body: JSON.stringify({
//     name: "Shaindal3",
//     email: "shaindal3Test@stud.noroff.no",
//     password: "Ailo220189"

// }),
// headers: {
//     'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

//     localStorage.setItem('_token', accessToken);
