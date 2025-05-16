import JwtTokenHandler from "./JwtTokenHandler";

async function deleteX(thingToDelete, id) {
    if (!JwtTokenHandler.isCurrentlyLoggedIn()) {
        return;
    }

    if (
        thingToDelete !== "user" &&
        thingToDelete !== "post" &&
        thingToDelete !== "comment"
    ) {
        return;
    }

    const request = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/" + thingToDelete + "/" + id,
        {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + JwtTokenHandler.getToken(),
            },
        }
    );

    if (request.status === 401) {
        JwtTokenHandler.removeToken();
    }

    return request.ok;
}

export default deleteX;
