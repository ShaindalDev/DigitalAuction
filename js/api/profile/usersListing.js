import { usersListing } from "../constants";
import { timeFormatChanger } from "../../components/timeChange"; //will be implemented later

const token = localStorage.getItem("_token");
const userName = localStorage.getItem("profile");
const listingWrapper = document.querySelector(".usersAuctions");


/**
 * This will get all the user's post that has been created.
 * A filter method is used to show only the user's post and not all other posts.
 * Authentication is run here as well to check if you are logged in with a valid user email and password
 * @param {string} token This is the token that has been stored when login function was run
 */
export async function getUserListing() {
  const response = await fetch(
    `${usersListing}/${userName}/listings?_seller=true`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    }
  );
  const data = await response.json();
  console.log(data);
  /**
   * Filter function, to filter all the data that comes from the API, down to a single users data.
   */
  const filteredData = data.filter((filtered) => {
    return filtered.seller.name == userName;
    
  });
  
  listingWrapper.innerHTML = "";
  filteredData.forEach((filteredData) => {
    listingWrapper.innerHTML += `<div class="col">
    <div class="card py-3 px-3">
      <img src="${filteredData.media}" class="card-img-top" alt="...">
      <div class="card-body">
      <div class="col d-flex flex-column">
      <h2 class="card-title ms-3">${filteredData.title}</h2>
        <div class="card-body ag-relative">
        <div>${filteredData.description}</div>
        <span>Tags: ${filteredData.tags}</span>
       </div>
       </a><div class="d-flex flex-column gap-1 mx-2 justify-content-center mb-0 mt-auto p-2"><a href="/pages/listings/listing-item/index.html?id=6260d2a8-4835-4277-af1a-13aec9a47abf" class="text-theme-blue">
       <span class="ag-time shadow d-inline-flex justify-content-center align-items-center gap-2"><i class="fa-solid fa-clock"></i>${filteredData.endsAt}</span>
       </a><div class="d-flex gap-2 justify-content-end"><a href="#" class="text-theme-blue">
       <a href="/listings/singel-listing/index.html" class="btn btn-theme-blue text-center shadow">Read more</a>
       </div>
       </div>
      </div>
      </div>
    </div>
  </div>
  `;
  });
  if (!response.ok) {
    throw new Error("HTTP error! status: ${response.status}");
  }
  console.log("This is all of your posts", filteredData);

  console.log(listingWrapper);
}

getUserListing();
