import { API_MAIN_URL } from "../constants.js";
import { authFetch } from "../authHeader.js";

const detailContainer = document.querySelector(".listingDetails");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const action = "/listings";
const url = `${API_MAIN_URL}${action}/${id}?_seller=true&_bids=true`;

/**
 * This shows a single post through using fetch with an PostID from the API When button View Post is clicked
 */
export async function getDetails() {
  if (!id) {
    throw new Error("Failed to fetch the post due to missing ItemID");
  }
  const singleItemURL = `${url}`;

  const response = await authFetch(singleItemURL);

  const details = await response.json();

  console.log(details);
  document.title = details.title;
  createHtml(details);
  if (createHtml) {
  }

  // // Iterate over bid buttons.
  document.querySelectorAll(".placeBidBtn").forEach((item) => {
    item.addEventListener("click", (event) => {
      placeBid(item.dataset.id);
    });
  });

  /**
   * This is the Edit Post function with eventListener. This is run with the updatePost function below
   * @param {*} id
   */

  async function placeBid(id) {
    const response = await fetch(`${API_MAIN_URL}/listings/` + id, authOptions);

    const listing = await response.json();
    document.getElementById("id").value = listing.id;
    document.getElementById("title").value = listing.title;
    document.getElementById("body").value = listing.description;
    document.getElementById("tags").value = listing.tags;
    document.getElementById("media").value = listing.media;
  }

  const placeBidBtn = document.getElementById("placeBidBtn");

  placeBidBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("this was clicked");
    const postId = document.getElementById("id").value;
    updatePost(postId);
  });

  async function updatePost(id) {
    const form = document.getElementById("updatePostForm");
    const formData = new FormData(form);
    const post = Object.formEntries(formData.entries());
    const response = await fetch(API_SOCIAL_URL + "/posts/" + id, {
      method: "PUT",
      cache: "no-cache",
      body: JSON.stringify(post),
    });

    return response.json();
  }

  console.log(detailContainer);
}
getDetails();
