import { timeFormatChanger } from "./timeChange";
/**
 * This renders the HTML for all items.
 * @param {*} itemsToRender
 */
export function renderItems(itemsToRender) {
  const itemsContainer = document.querySelector("#itemsList");

  itemsContainer.innerHTML = "";

  itemsToRender.forEach((items) => {
    itemsContainer.innerHTML += `
      <div class="col">
        <div class="card py-3 px-3">
          <img src="${items.media}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${items.title}</h5>
            <p class="card-text">${items.description}</p>
            <p class="card-text">${items.tags}</p>
            <p class="card-text">Bids on this item<span class="mx-1">|</span>${
              items._count.bids
            }</p>
          </div>
          <div class="py-3 px-3">Ending: 
            <p class="bg-info border border-solid rounded mb-3 py-2 px-2">${new Date(
              items.endsAt
            ).toLocaleDateString()} <span class=mx-1>|</span>${new Date(
      items.endsAt
    ).toLocaleTimeString()}
          </div>
          <button type="button" class="btn btn-outline-primary btn-sm px-4 gap-3"><a href="../listings/singleListing/index.html?id=${
            items.id
          }">Details</a></button>
          </div>
      </div>`;
  });
}
