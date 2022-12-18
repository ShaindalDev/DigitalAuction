import { createNewListing } from "../api/profile/create.js";

export function createNewListingListener() {
  const form = document.getElementById("newListingForm");

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

      if (listing.tags === "") {
        delete listing.tags;
      }

      if (listing.media === "") {
        delete listing.media;
      }

      createNewListing(listing);
    });
  }
}
