import { API_MAIN_URL } from "../constants.js";
import { renderItems } from "../../components/renderListings";

export async function getUnAuthItems(getItemsURL) {
    const url = `${API_MAIN_URL}/listings`;
    const method = "GET";

    try {
        const response = await fetch(url);
        const items = await response.json(getItemsURL);
        console.log(items);
        renderItems(items);
    } catch(error) {
        console.log(error);
    }
};

getUnAuthItems();