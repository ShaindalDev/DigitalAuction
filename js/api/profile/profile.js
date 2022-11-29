import { apiPath } from "../constants.js";
import { headers } from "../authHeader.js";

export async function getProfiles() {
  const response = await fetch(`${apiPath}/auction/profiles`, { headers: headers() });
  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText);
}

export async function getProfile(name) {
  const response = await fetch(`${apiPath}/auction/profiles/${name}`, { headers: headers() });
  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText);
}
