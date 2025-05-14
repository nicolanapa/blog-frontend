import { data } from "react-router";
import postComments from "./postComments.js";
import JwtTokenHandler from "../scripts/JwtTokenHandler.js";

async function post({ params }) {
    if (isNaN(params.id) || parseInt(params.id) < 0) {
        throw data("Wrong Params", { status: 400 });
    }

    let originalResponse;

    const post = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/post/" + params.id,
        {
            headers: {
                Authorization: "Bearer " + JwtTokenHandler.getToken(),
            },
        }
    )
        .then(async (res) => {
            originalResponse = res;
            return res.json();
        })
        .catch(() => {});

    if (!originalResponse.ok) {
        throw data(post.errors, { status: originalResponse.status });
    }

    return { post, comments: await postComments({ params }) };
}

export default post;
