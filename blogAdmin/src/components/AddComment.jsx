import React from "react";
import { useFetcher } from "react-router";
import "../styles/comment.css";

function AddComment() {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="post" action="./addComment" className="add-comment">
            {fetcher.data?.ok && <p className="success">Success</p>}
            {fetcher.data?.error && <p className="error">{fetcher.data.error}</p>}

            <label htmlFor="content">Leave a Comment!</label>
            <input
                type="text"
                id="content"
                name="content"
                maxLength={1024}
                required
            />

            <button type="submit" className="submit-button">Submit</button>
        </fetcher.Form>
    );
}

export default AddComment;
