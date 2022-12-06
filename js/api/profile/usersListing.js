import { usersListing } from "../constants";
import { timeFormatChanger } from "../../components/timeChange"; //will be implemented later

const token = localStorage.getItem("_token");
const userName = localStorage.getItem("profile");
const listingWrapper = document.getElementsByClassName("usersAuctions");
/**
 * This will get all the user's post that has been created.
 * A filter method is used to show only the user's post and not all other posts.
 * Authentication is run here as well to check if you are logged in with a valid user email and password
 * @param {string} token This is the token that has been stored when login function was run
 */
export async function getUserListing() {
  const response = await fetch(
    `${usersListing}/${userName}/listings`,
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
  // console.log(data);
  /**
   * Filter function, to filter all the data that comes from the API, down to a single users data.
   */
  const filteredData = data.filter((filtered) => {
    return filtered.name == userName;
  });

  listingWrapper.innerHTML = "";
  filteredData.forEach((filteredData) => {
    listingWrapper.innerHTML += `<div class="col">
    <div class="card py-3 px-3">
      <img src="${filteredData.media}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${filteredData.title}</h5>
        <p class="card-text">${filteredData.description}</p>
        <p class="card-text">${filteredData.tags}</p>
        <p class="card-text">${filteredData.bids}</p>
      </div>
    </div>
  </div>`;
  });
  if (!response.ok) {
    throw new Error("HTTP error! status: ${response.status}");
  }
  console.log("This is all of your posts", filteredData);

  console.log(listingWrapper);
}

getUserListing();
