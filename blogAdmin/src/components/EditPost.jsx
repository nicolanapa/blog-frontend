import PropTypes from "prop-types";
import React from "react";
import { useFetcher } from "react-router";

function EditPost(props) {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="post" action={"/post/" + props.id + "/edit"}>
            {fetcher.data?.ok && <p className="success">Success!</p>}
            {fetcher.data?.error && (
                <p className="error">{fetcher.data.error}</p>
            )}

            <label htmlFor="title">Title: </label>
            <input
                type="text"
                id="title"
                name="title"
                defaultValue={props.title}
                maxLength={32}
                required
            />

            <label htmlFor="content">Content: </label>
            <textarea
                type="text"
                id="content"
                name="content"
                defaultValue={props.content}
                maxLength={4096}
                required
            />

            <label htmlFor="is-published">Post is set as </label>
            <select
                id="is-published"
                name="isPublished"
                defaultValue={props.isPublished}
            >
                <option value="true" defaultValue={true}>
                    Published
                </option>
                <option value="false">Unpublished</option>
            </select>

            <button type="submit">Update Post</button>
        </fetcher.Form>
    );
}

EditPost.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isPublished: PropTypes.bool.isRequired,
};

export default EditPost;
