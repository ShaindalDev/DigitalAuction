import { apiUrl } from "../constants";
import { authFetch } from "../authHeader";

const action = "/auction/listings";
const method = "post";

/**
 * This uses the POST method to create a new listing on the API. This is the create new listing it self
 * it's then called with evenListener from listeners folder
 * @param {*} listingData 
 */
export async function createNewListing(listingData) {
    const createListingURL = `${apiUrl}${action};`

    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify(listingData)
    })

    const listing = await response.json();

    console.log(listing)
}