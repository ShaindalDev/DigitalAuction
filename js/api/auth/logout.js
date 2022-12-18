import { remove } from "../../storage/index.js";

export function logOut() {
  const logOutButton = document.querySelector("#logout");

  if (logOutButton) {
    logOutButton.onclick = function () {
      remove("token");
      remove("userProfile");
      location.href = "../../../login/index.html";
    };
  }
}
