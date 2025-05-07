import React from "react";
import { useFetcher } from "react-router";

function AddComment() {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="post" action="./addComment">
            {fetcher.data?.ok && <p>Success</p>}
            {fetcher.data?.error && <p>{fetcher.data.error}</p>}

            <label htmlFor="content">Leave a Comment!</label>
            <input
                type="text"
                id="content"
                name="content"
                maxLength={1024}
                required
            />

            <button type="submit">Submit</button>
        </fetcher.Form>
    );
}

export default AddComment;
