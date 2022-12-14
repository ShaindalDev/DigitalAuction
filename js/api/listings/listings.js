import { API_MAIN_URL } from "../constants.js";
import { renderItems } from "../../components/renderListings.js";

const action = "/listings"


async function getAllItems() {
    const url = `${API_MAIN_URL}${action}?sort=created&sortOrder=desc`;
    

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200) {
            renderItems(data);
        }

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getAllItems();