async function allPosts() {
    return {
        posts: await fetch(
            import.meta.env.VITE_FULL_HOSTNAME + "/post/published"
        )
            .then((res) => res.json())
            .catch((e) => {
                console.error(e);
                return [];
            }),
    };
}

export default allPosts;
