import { apiUrl } from "../constants"; //future usage of this will come
import { profileURL } from "../constants";
import { profile } from "../constants";
import { authFetch } from "../authHeader";

const actions = "/listings?_seller=true&_bids=true"; //this will be added later

async function getProfile() {
  const getUserProfileUrl = `${profileURL}/${profile}`;
  const response = await authFetch(getUserProfileUrl);
  const data = await response.json();
  console.log(data);
  profileWrapper.innerHTML = "";
  profileWrapper.innerHTML += `<div class="px-4 py-5 text-center border-bottom border-top solid shadow p-3 mb-5" id="usersProfile">
    <img class="d-block mx-auto mb-4" src="${data.avatar}" alt="" width="72" height="57">
    <h1 class="display-5 fw-bold">${data.name}</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">This is your statistics</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <p>Credits: ${data.credits}</p>
        <p>Winning bids: ${data.wins}</p>
      </div>
    </div>
  </div>`;
  if (!response.ok) {
    throw new Error("HTTP error! status: ${response.status}");
  }
}

getProfile();
