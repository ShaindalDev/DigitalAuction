export const apiUrl = "https://api.noroff.dev/api/v1";
// export const apiPath = apiUrl.toString()
export const profileURL = `${apiUrl}/auction/profiles`;
export const usersListing = `${profileURL}`;

// LocalStorage Exports
export const profile = localStorage.getItem("profile");
