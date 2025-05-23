import { data } from "react-router";

async function user({ params }) {
    if (isNaN(params.id) || parseInt(params.id) < 0) {
        throw data("Wrong Params", { status: 400 });
    }

    let originalResponse;

    const user = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/user/" + params.id
    )
        .then(async (res) => {
            originalResponse = res;
            return res.json();
        })
        .catch(() => {});

    if (!originalResponse.ok) {
        throw data(user.errors, { status: originalResponse.status });
    }

    let posts = [];

    if (user.type === "blogAuthor") {
        posts = await fetch(
            import.meta.env.VITE_FULL_HOSTNAME + "/user/" + params.id + "/posts"
        ).then((res) => res.json());
    }

    return { user, posts };
}

export default user;
