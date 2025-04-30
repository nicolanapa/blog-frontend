import { data } from "react-router";

async function postComments({ params }) {
    if (isNaN(params.id) || parseInt(params.id) < 0) {
        throw data("Wrong Params", { status: 400 });
    }

    let originalResponse;

    const comments = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/post/" + params.id + "/comments"
    )
        .then(async (res) => {
            originalResponse = res;
            return res.json();
        })
        .catch(() => []);

    if (!originalResponse.ok) {
        throw data(comments.errors, { status: originalResponse.status });
    }

    return comments;
}

export default postComments;
