import JwtTokenHandler from "../scripts/JwtTokenHandler";

async function allPosts() {
    return {
        publishedPosts: await fetch(
            import.meta.env.VITE_FULL_HOSTNAME + "/post/published"
        )
            .then((res) => res.json())
            .catch((e) => {
                console.error(e);
                return [];
            }),
        unpublishedPosts: await fetch(
            import.meta.env.VITE_FULL_HOSTNAME + "/post/unpublished",
            {
                headers: {
                    Authorization: "Bearer " + JwtTokenHandler.getToken(),
                },
            }
        )
            .then((res) => res.json())
            .catch((e) => {
                console.error(e);
                return [];
            }),
    };
}

export default allPosts;
