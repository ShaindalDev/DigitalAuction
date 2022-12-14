import { profileURL } from "../constants.js";
import { authFetch } from "../authHeader.js";
import { load } from "../../storage/index.js";

const method = "PUT";

export async function updateUserAvatar(userData) {
    const user = load("userProfile");
    const userName = user.name;
    const updateAvatarURL = `${profileURL}/${userName}/media`;

    console.log(updateAvatarURL);

    if (!user) {
        throw new Error("This requires a valid user ID!");
    }

    const response = await authFetch(updateAvatarURL, {
        method,
        body: JSON.stringify(userData),
        
    })

    if (response.status === 201) {
        alert("Avatar update success")
    }

    location.href = `../../../profile/index.html/`;
    return await response.json();
}
