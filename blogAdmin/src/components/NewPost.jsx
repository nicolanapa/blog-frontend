import React from "react";
import { useFetcher } from "react-router";
import "../styles/post.css";

function NewPost() {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="post" action="/newPost" className="post-form centered">
            {fetcher.data?.ok && <p className="success">Success!</p>}
            {fetcher.data?.error && (
                <p className="error">{fetcher.data.error}</p>
            )}

            <label htmlFor="title">Title: </label>
            <input
                type="text"
                id="title"
                name="title"
                maxLength={32}
                required
            />

            <label htmlFor="content">Content: </label>
            <textarea
                type="text"
                id="content"
                name="content"
                maxLength={4096}
                required
            />

            <label htmlFor="is-published">Post is set as </label>
            <select id="is-published" name="isPublished">
                <option value="true" defaultValue={true}>
                    Published
                </option>
                <option value="false">Unpublished</option>
            </select>

            <button type="submit" className="submit-post-button">
                Post
            </button>
        </fetcher.Form>
    );
}

export default NewPost;
