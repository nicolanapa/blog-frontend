import PropTypes from "prop-types";
import React from "react";
import { useFetcher } from "react-router";

function EditComment(props) {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="post" action={"/comment/" + props.id + "/edit"}>
            {fetcher.data?.ok && <p className="success">Success!</p>}
            {fetcher.data?.error && (
                <p className="error">{fetcher.data.error}</p>
            )}

            <label htmlFor="content">Leave a Comment!</label>
            <input
                type="text"
                id="content"
                name="content"
                defaultValue={props.content}
                maxLength={1024}
                required
            />

            <button type="submit">Update Comment</button>
        </fetcher.Form>
    );
}

EditComment.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
};

export default EditComment;
