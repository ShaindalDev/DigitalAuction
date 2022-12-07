import { createNewListing } from "../api/profile/create.js";

export function createNewListener(){
    const form = document.querySelector("#newListingForm");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            console.log("Clicked form");
            const form = event.target;
            const formData = new FormData(form);
            // const listing = Object.fromEntries(formData.entries())
        
            const title = formData.get('title');
                const description = formData.get('description');
                const tags = formData.get('tags').split(', ');
                const media = formData.get('media').split(', ');
                const endsAt = formData.get('endsAt');

                const listing = {title, description, tags, media, endsAt}

                createNewListing(listing).then(console.log(listing))
    })
}
};

console.log("this was loaded");