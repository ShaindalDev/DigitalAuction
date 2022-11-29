import { apiPath } from "../constants.js";
import { headers } from "../authHeader.js";

export async function getPosts(limit = 50, offset = 0) {
  const response = await fetch(`${apiPath}/auction/listings?limit=${limit}&offset=${offset}`, { headers: headers() });
  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText);
}

export async function getPost(id) {
  const response = await fetch(`${apiPath}/auction/listings/${id}`, { headers: headers() });
  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText);
}