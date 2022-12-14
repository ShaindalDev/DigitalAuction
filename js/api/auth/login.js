import { API_MAIN_URL } from "../constants.js";
import * as storage from "../../storage/index.js";

const action = "/auth/login";
const method = "POST";

export async function logIn(userProfile) {
  const loginURL = `${API_MAIN_URL}${action}`;
  const body = JSON.stringify(userProfile);

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    const { accessToken, ...user } = await response.json();

    console.log(response);

    if (response.status === 200) {
      storage.createLocalStorageSave("token", accessToken);
      storage.createLocalStorageSave("userProfile", user);
      location.href = "../../../profile/index.html";
    }

    if (response.status !== 200) {
      alert("Something went wrong! Please check your Username and/or Password");
    }
  } catch (error) {
    console.log(error);
  }
}

