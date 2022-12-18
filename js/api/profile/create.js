import { API_MAIN_URL } from "../constants.js";
import { listingsURL } from "../constants.js";
import { authFetch } from "../authHeader.js";

const method = "POST";

export async function createNewListing(listingData) {
  const createURL = `${API_MAIN_URL}${listingsURL}`;

  try {
    const response = await authFetch(createURL, {
      method,
      body: JSON.stringify(listingData),
    });

    location.href = "../../profile/index.html";
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
