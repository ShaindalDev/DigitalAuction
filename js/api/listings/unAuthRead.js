import { API_MAIN_URL } from "../constants.js";
import { searchPosts } from "../../components/searchFunction.js";
import { renderItems } from "../../components/renderListings";

export async function getUnAuthItems(getItemsURL) {
  const url = `${API_MAIN_URL}/listings?_active=true&_seller=true&_bids=true&sort=created&sortOrder=desc`;
  const method = "GET";

  try {
    const response = await fetch(url);
    const items = await response.json(getItemsURL);

    renderItems(items);
    searchPosts(items);
  } catch (error) {
    console.log(error);
  }
}

getUnAuthItems();
