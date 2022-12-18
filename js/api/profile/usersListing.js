import { profileURL } from "../constants.js";
import { listingsURL } from "../constants.js";
import { load } from "../../storage/index.js";
import { authFetch } from "../authHeader.js";
import { renderItems } from "../../components/renderListings.js";

const token = load("token");
const user = load("userProfile");
const userName = user.name;
const listingWrapper = document.getElementsByClassName("usersAuctions");
/**
 * This will get all the user's post that has been created.
 * A filter method is used to show only the user's post and not all other posts.
 * Authentication is run here as well to check if you are logged in with a valid user email and password
 * @param {string} token This is the token that has been stored when login function was run
 */
export async function getUserListing() {
  const url = `${profileURL}/${userName}${listingsURL}?_seller=true&_bids=true`;

  try {
    const response = await authFetch(url);
    const data = await response.json();

    if (response.status === 200) {
      renderItems(data);
    }
  } catch (error) {
    console.log(error);
  }
}

getUserListing();
