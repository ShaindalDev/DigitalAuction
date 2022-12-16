import * as listeners from "./listeners/index.js";

const path = location.pathname;

console.log("current path", path);

if (path === "/login/index.html") {
  listeners.setLogInFormListener();
  listeners.setRegisterUserListener();
} else if (path === "/listings/create/index.html") {
  listeners.createNewListingListener();
} else if (path === "/profile/index.html") {
  listeners.updateAvatarListener();
} else if (path === "/listing/singleListing/index.html") {
  listeners.bidOnItemListener();
}

console.log("this was loaded..cachingching");
