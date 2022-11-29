import { apiPath } from "../constants.js";
import { headers } from "../authHeader.js";

export async function bid(listingId, body, amount) {
  const response = await fetch(`${apiPath}/auction/listings/${listingId}/bids`, {
    method: "post",
    body: JSON.stringify({ body, amount }),
    headers: headers("application/json")
  })

  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText)
}