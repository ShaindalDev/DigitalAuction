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
    if (response.status === 201) {
      location.href = "../../../profile/index.html";
    }

    if (response.status !== 201) {
      alert("Something went wrong!: ${response.status}");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}
