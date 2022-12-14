import { profileURL } from "../constants.js";
import { authFetch } from "../authHeader.js";
import { load } from "../../storage/index.js";

const user = load("userProfile");
const userName = user.name;

console.log(user);

const method = "GET";

const URL = `${profileURL}/${userName}`;
const profileWrapper = document.getElementById("userWrapper");

/**
 * function to fetch the profile info from the API
 */
export async function getProfile() {
  try {
    const response = await authFetch(URL, method);
    const userInfo = await response.json();

    profileWrapper.innerHTML = "";
    profileWrapper.innerHTML += `<div class="mt-1 px-4 py-5 text-center border-bottom border-top solid shadow p-3 mb-5" id="usersProfile">
  <img class="d-block mx-auto mb-4 rounded" src="${userInfo.avatar}" alt="" width="100" height="90">
  <h1 class="display-5 fw-bold">${userInfo.name}</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">This is your statistics</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <p class="mb-4">Credits: ${userInfo.credits} <span class=mx-2>|</span> Wining Bids: ${userInfo.wins.length} <span class=mx-2>|</span> Listings: ${userInfo._count.listings}</p>

    </div>
  </div>
</div>`;
  } catch (error) {
    console.log(error);
  }
}
getProfile();
