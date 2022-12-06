import { apiUrl } from "../constants.js";

const registerForm = document.getElementById("registerForm");
/**
 * This is the register function with evenListener on the register button. 
 * this takes info from the registration form and register it to the API, if all is valid a user is registered to the application.
 */
registerForm.addEventListener("submit", (event) => {
  console.log('test click')
  event.preventDefault();
  const userName = registerForm.registerName.value;
  const email = registerForm.registerEmail.value;
  const password = registerForm.registerPassword.value;
  const avatar = registerForm.registerAvatar.value
  try {
    fetch(`${apiUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        email: email,
        password: password,
        avatar: avatar
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.localStorage.setItem("_token", data.accessToken);
        location.href = "/profile/index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
});



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
