import JwtTokenHandler from "./JwtTokenHandler";

async function changePublishState(post, setIsPublished, isPublished) {
    const request = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/post/" + post.id,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JwtTokenHandler.getToken(),
            },
            body: JSON.stringify({
                title: post.title,
                content: post.content,
                isPublished: !isPublished,
            }),
        }
    );

    console.log(request);

    setIsPublished(!isPublished);

    location.assign("/?published=" + !isPublished);
}

export default changePublishState;
