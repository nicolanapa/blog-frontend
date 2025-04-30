import { data } from "react-router";

async function post({ params }) {
    if (isNaN(params.id) || parseInt(params.id) < 0) {
        throw data("Wrong Params", { status: 400 });
    }

    let originalResponse;

    const post = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/post/" + params.id
    )
        .then(async (res) => {
            originalResponse = res;
            return res.json();
        })
        .catch(() => {});

    if (!originalResponse.ok) {
        throw data(post.errors, { status: originalResponse.status });
    }

    return { post };
}

export default post;
