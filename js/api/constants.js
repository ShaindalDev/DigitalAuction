export const API_HOST = "https://api.noroff.dev/api/v1";
export const API_AUCTION = "/auction";
export const API_MAIN_URL = `${API_HOST}${API_AUCTION}`;
export const profileURL = `${API_MAIN_URL}/profiles`;
export const listingsURL = "/listings";
export const bidsURL = "/bids";
export const sellerBidsURL = "?_seller=true&_bids=true";

// LocalStorage Exports
export const profile = localStorage.getItem("profile");
