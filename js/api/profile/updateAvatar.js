import { API_MAIN_URL } from "../constants.js";
import { authFetch } from "../authHeader.js";
import { load } from "../../storage/index.js";

const action = "/profiles";
const method = "PUT";

export async function updateUserAvatar(userData) {
  const user = load("userProfile");
  const userName = user.name;
  const updateAvatarURL = `${API_MAIN_URL}${action}/${userName}/media`;

  if (!user) {
    throw new Error("This requires a valid user!");
  }

  const response = await authFetch(updateAvatarURL, {
    method,
    body: JSON.stringify(userData),
  });

  return await response.json();
}
