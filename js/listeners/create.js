import { createNewListing } from "../api/profile/create.js";

export function createNewListingListener() {
    const form = document.querySelector("#newListingForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);

            const title = formData.get("title");
            const description = formData.get("description");
            const endsAt = new Date(formData.get("endsAt"));
            const media = formData.get("media").split(", ");
            const tags = formData.get("tags").split(", ");
            
            
      
            const listing = { title, description, media, endsAt, tags };

            if (post.tags === ""){
                delete post.tags;
            }

            if (post.media === "") {
                delete post.media;
            }

            createNewListing(listing);
            console.log(listing);
        });
    }
}

// const form = document.getElementById("newListingForm");

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     console.log("Clicked form");
//     const form = event.target;
//     const formData = new FormData(form);
//     const listing = Object.fromEntries(formData.entries())

//     createNewListing(listing)
// });