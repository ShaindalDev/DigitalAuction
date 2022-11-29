import { bid } from "../../api/index.js";
import { getSearchParams } from "../../router/searchParams.js";

export async function bidListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form)
  const body = data.get('body');
  const listingId = form.dataset.listingId;
  const replyToId = getSearchParams().bid;
  try {
    await bid(listingId, body, replyToId);
  } catch {
    return alert('There was a problem posting your Bid');
  }
  
  form.remove();
  location.reload()
}