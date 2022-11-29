export const apiUrl = new URL("https://nf-api.onrender.dev/api/v1");
export const apiPath = apiUrl.toString()
export const profileURL = `${apiUrl}/auction/profiles`;
export const profile = localStorage.getItem("profile");