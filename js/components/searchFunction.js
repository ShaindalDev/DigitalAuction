import { renderItems } from "./renderListings.js";
/**
 * This is the search bar function, it will give the result typed in search bar and replace posts with matching result.
 * @param {*} post
 */
export function searchPosts(post) {
  const searchBar = document.querySelector("#searchBar");
  searchBar.onkeyup = function (event) {
    const searchValues = event.target.value.trim().toLowerCase();

    const filteredPosts = post.filter((post) => {
      if (post.title.toLowerCase().includes(searchValues)) {
        return true;
      } else if (post.seller.name.toLowerCase().includes(searchValues)) {
        return true;
      }
    });
    renderItems(filteredPosts);
  };
}
