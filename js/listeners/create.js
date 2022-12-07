import { createNewListing } from "../api/profile/create.js";

const form = document.getElementById("newListingForm");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Clicked form");
    const form = event.target;
    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries())

    createNewListing(listing)
});

console.log("this was loaded");