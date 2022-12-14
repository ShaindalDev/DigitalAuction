import { API_MAIN_URL } from "../constants.js";
import { listingsURL } from "../constants.js";
import { save } from "../../storage/index.js";
import { authFetch } from "../authHeader.js";

const method = "POST";

export async function bidOnItem(id, amount) {
  const bidURL = `${API_MAIN_URL}${listingsURL}/${id}/bids`;

  const response = await authFetch(bidURL, {
    method,
    body: JSON.stringify({ amount: amount }),
  });

  const { userName } = await response.json();

  if (response.ok) {
    save("userProfile", userName);
    location.href = `../../../listing/index.html?id=${id}`;
    return await response.json();
  } else {
    throw new Error(
      "There was something wrong, please try again ${response.status}"
    );
  }
}
