import { bidOnItem } from "../api/listings/bids.js";

export function bidOnItemListener(id, amount) {
    const form = document.querySelector("#placeBid");

    const params =  new URLSearchParams(document.location.search)
    const bidID = params.get("id");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const placeBid = event.target.amount.value;

            bidOnItem(bidID, Number(placeBid));
            console.log(bidID, Number(placeBid));
        });
    }
}