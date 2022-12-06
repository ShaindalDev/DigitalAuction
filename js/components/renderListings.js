import { timeFormatChanger } from "./timeChange";
/**
 * This renders the HTML for all items. 
 * @param {*} itemsToRender 
 */
 export function renderItems(itemsToRender) {
    const itemsContainer = document.querySelector('#itemsList');

    itemsContainer.innerHTML = "";

    itemsToRender.forEach((items) => {
      itemsContainer.innerHTML += `
      <div class="col">
        <div class="card py-3 px-3">
          <img src="${items.media}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${items.title}</h5>
            <p class="card-text">${items.description}</p>
            <p class="card-text>${items.tags}</p>
            <p class="card-text>${items.bids}</p>
            <p class="card-text>${items.created}</p>
            <p class="card-text">${items.endsAt}</p>
          </div>
        </div>
      </div>`;
    });
    
};