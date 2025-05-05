import JwtTokenHandler from "../JwtTokenHandler";

async function addComment({ request }) {
    if (!JwtTokenHandler.isCurrentlyLoggedIn()) {
        return { ok: false, error: "You're not currently logged in" };
    }

    const data = await request.formData();

    if (data.get("content").length === 0 || data.get("content").length > 1024) {
        return {
            ok: false,
            error: "Invalid Comment, this is field is required or reached max 1024 characters",
        };
    }

    let postId = request.url.split("/");
    postId = postId[postId.length - 2];

    const commentRequest = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/comment/" + postId,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JwtTokenHandler.getToken(),
            },
            body: JSON.stringify({
                content: data.get("content"),
            }),
        }
    );

    if (commentRequest.status === 401) {
        return {
            ok: commentRequest.ok,
            error: "Unauthorized, please login through /authenticate",
        };
    }

    const commentResponse = await commentRequest.json();

    console.log(commentRequest, commentResponse);

    if (!commentRequest.ok) {
        console.log(commentResponse);

        return { ok: commentRequest.ok, error: commentResponse.errors };
    }

    return { ok: commentRequest.ok };
}

export default addComment;
