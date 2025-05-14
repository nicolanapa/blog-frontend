import JwtTokenHandler from "../scripts/JwtTokenHandler";

async function editComment({ request }) {
    if (
        !JwtTokenHandler.isCurrentlyLoggedIn() ||
        JwtTokenHandler.returnType() !== "blogAuthor"
    ) {
        return { ok: false, error: "You're not currently logged in" };
    }

    const data = await request.formData();

    if (data.get("content").length === 0 || data.get("content").length > 1024) {
        return {
            ok: false,
            error: "Invalid Comment, this is field is required or reached max 1024 characters",
        };
    }

    let commentId = request.url.split("/");
    commentId = commentId[commentId.length - 2];

    const commentRequest = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/comment/" + commentId,
        {
            method: "PUT",
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
        JwtTokenHandler.removeToken();

        return {
            ok: commentRequest.ok,
            error: "Unauthorized, please login through /authenticate",
        };
    }

    const commentResponse = await commentRequest.json();

    if (!commentRequest.ok) {
        console.log(commentResponse);

        return { ok: commentRequest.ok, error: commentResponse.errors[0].msg };
    }

    return { ok: commentRequest.ok };
}

export default editComment;
