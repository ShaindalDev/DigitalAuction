/**
 * This renders the HTML for all items. 
 * @param {*} itemsToRender 
 */
 export function renderItems(itemsToRender) {
    const itemsContainer = document.querySelector('#itemsList');

    itemsContainer.innerHTML = "";

    itemsToRender.forEach((items) => {
      itemsContainer.innerHTML += `<div class="row row-cols-1 row-cols-md-2 g-4 mx-auto">
      <div class="col">
        <div class="card py-3 px-3">
          <img src="${items.media}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${items.title}</h5>
            <p class="card-text">${items.description}</p>
          </div>
        </div>
      </div>
    </div>`;
    });
    
};