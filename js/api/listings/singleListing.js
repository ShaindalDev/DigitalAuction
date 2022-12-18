import { API_MAIN_URL } from "../constants.js";
import { authFetch } from "../authHeader.js";

const params = new URLSearchParams(document.location.search);
const id = params.get("id");
if (!id) location.href = "../../../../index.html";

const action = "/listings";
const method = "GET";

const url = `${API_MAIN_URL}${action}/${id}?_seller=true&_bids=true`;
const title = document.querySelector("title");
const wrapper = document.querySelector("#singleItem");

(async function getDetails() {
  try {
    const response = await authFetch(url, { method });
    const detailsListing = await response.json();

    title.innerHTML = `Digital Auction | ${detailsListing.title}`;

    const avatarImage = detailsListing.seller.avatar
      ? `<img
      src="${detailsListing.seller.avatar}"
      alt="Avatar for ${detailsListing.seller.name}"
      class="d-block mx-auto mb-4 rounded" width="100" height="90"
    />`
      : "";

    const listingImage = detailsListing.media
      ? `<img
        src="${detailsListing.media}"
        alt="Image for ${detailsListing.title}"
        class="auction-image"
      />`
      : "";

    const historyOfBids = detailsListing;
    for (var i = 0; i < detailsListing.bids.length; i++) {
      console.log(detailsListing.bids[i]);
    }

    const sortingOfBids = historyOfBids.bids.sort(
      (a, b) => b.amount - a.amount
    );
    const bids = sortingOfBids[0]
      ? `<div class=""<p class="bids-info">Currently the latest bid made is: </p><p>${
          detailsListing.bids[0].amount
        } Credits by ${
          detailsListing.bids[0].bidderName
        } </p> <p class="bids-info"> Created at: </p> <p>${new Date(
          detailsListing.bids[0].created
        ).toDateString()} at ${new Date(
          detailsListing.bids[0].created
        ).toLocaleTimeString()}</p>`
      : "";

    wrapper.innerHTML = `
      <div class="card text-center justify-content-center m-4 p-0">
        <h2 class="card-header">${detailsListing.title}</h2>
        <p class="listing-text my-3">${detailsListing.description}</p>
        ${listingImage}
        <p>${detailsListing.tags}</p>
        <p>Closes at: </br> ${new Date(
          detailsListing.endsAt
        ).toDateString()} at ${new Date(
      detailsListing.endsAt
    ).toLocaleTimeString()}</p>
      <hr/>
        <div class="card text-center justify-content-center m-2 p-3">
          ${bids}
          <p class="bids-info">Amount of bids on this item is: </br> ${
            detailsListing._count.bids
          }</h4>
        </div>
        <hr/>
        <div class="card-footer text-muted m-0">
          <h3>The seller:</h3>
          ${avatarImage}
          <p>Name: ${detailsListing.seller.name}</p>
          <p>Contact the seller by email: ${detailsListing.seller.email}</p>
        </div>
      </div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 px-4">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#newListingBid" aria-controls="newListingBid">Add a bid</button>
        </div>
      </div>`;
  } catch (error) {
    console.log(error);
  }
})();
