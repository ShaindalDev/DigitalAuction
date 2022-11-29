import { apiUrl } from "../constants";
import { profileURL } from "../constants";
import { profile } from "../constants";
import { headers } from "../authHeader";
import { authFetch } from "../authHeader";
const actions = "/listings?_seller=true&_bids=true";

async function getProfile() {
  const getUserProfileUrl = `${profileURL}/${profile}`;
  const response = await authFetch(getUserProfileUrl);
  const data = await response.json();
  console.log(data);
  profileWrapper.innerHTML = "";
  profileWrapper.innerHTML += `<div class="px-4 py-5 text-center border-bottom border-top solid shadow p-3 mb-5" id="usersProfile">
    <!-- <img class="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
    <h1 class="display-5 fw-bold">${data.name}</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">This is the place to be when you want something, but you to tired to go out and buy it. Here you can bid on auctions and have it shipped to you.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-outline-primary btn-lg px-4 gap-3"><a class="nav-link" href="/login/index.html">Login</a></button>
        <button type="button" class="btn btn-outline-primary btn-lg px-4"><a class="nav-link" href="/login/index.html">Register</a></button>
      </div>
    </div>
  </div>`;
  if (!response.ok) {
    throw new Error("HTTP error! status: ${response.status}");
  }
}

getProfile();
