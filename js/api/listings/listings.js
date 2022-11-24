import { apiUrl } from "../constants";
import { renderItems } from "../../components/renderListings";

export async function getAllItems(getItemsURL) {
    const url = `${apiUrl}/auction/listings`;
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

getAllItems();