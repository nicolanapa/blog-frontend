import JwtTokenHandler from "../scripts/JwtTokenHandler";

async function editPost({ request }) {
    if (
        !JwtTokenHandler.isCurrentlyLoggedIn() ||
        JwtTokenHandler.returnType() !== "blogAuthor"
    ) {
        return { ok: false, error: "You're not currently logged in" };
    }

    const data = await request.formData();

    if (data.get("title").length < 1 && data.get("title").length > 32) {
        return {
            ok: false,
            error: "Title must be between 1 and 32 chars length",
        };
    }

    if (data.get("content").length < 1 && data.get("content").length > 4096) {
        return {
            ok: false,
            error: "Content must be between 1 and 4096 chars length",
        };
    }

    let postId = request.url.split("/");
    postId = postId[postId.length - 2];

    const postRequest = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/post/" + postId,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JwtTokenHandler.getToken(),
            },
            body: JSON.stringify({
                title: data.get("title"),
                content: data.get("content"),
                isPublished: data.get("isPublished"),
            }),
        }
    );

    if (postRequest.status === 401) {
        JwtTokenHandler.removeToken();

        return {
            ok: postRequest.ok,
            error: "Unauthorized, please login through /authenticate",
        };
    }

    const postResponse = await postRequest.json();

    if (!postRequest.ok) {
        console.log(postResponse);

        return { ok: postRequest.ok, error: postResponse.errors[0].msg };
    }

    return { ok: postRequest.ok };
}

export default editPost;
