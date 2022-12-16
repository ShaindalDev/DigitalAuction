import { API_MAIN_URL } from "../constants.js";
import { searchPosts } from "../../components/searchFunction.js";
import { renderItems } from "../../components/renderListings.js";

const action = "/listings";

async function getAllItems() {
  const url = `${API_MAIN_URL}${action}?_active=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)


    if (response.status === 200) {
      renderItems(data);
    }

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllItems();
