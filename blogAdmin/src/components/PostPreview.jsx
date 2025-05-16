import React, { useState } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import changePublishState from "../scripts/changePublishState";
import "../styles/post.css";
import deleteX from "../scripts/deleteX";

function PostPreview(props) {
    const [isPublished, setIsPublished] = useState(props.isPublished);

    return (
        <article className="post-preview">
            <img
                src="/icons/post.svg"
                alt="Post"
                width="48px"
                height="auto"
                className="preview-photo"
            />

            <small>
                <time dateTime={props.publishDate}>
                    {new Date(props.publishDate).toLocaleString()}
                </time>
            </small>

            <address>
                Posted by{" "}
                <Link to={"/user/" + props.userId}>{props.username}</Link>
            </address>

            <h3>
                <Link to={"/post/" + props.id}>{props.title}</Link>
            </h3>

            <div className="button-container spacing-top">
                <button
                    type="button"
                    className="button-published"
                    onClick={() =>
                        changePublishState(props, setIsPublished, isPublished)
                    }
                >
                    {isPublished ? "Unpublish" : "Publish"}
                </button>

                <button
                    type="button"
                    onClick={async () => {
                        if (await deleteX("post", props.id)) {
                            location.reload();
                        }
                    }}
                    className="edit-button"
                >
                    <img
                        src="/icons/delete.svg"
                        alt="Delete this user"
                        width="20px"
                        height="auto"
                    />
                </button>
            </div>
        </article>
    );
}

PostPreview.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date).isRequired,
    isPublished: PropTypes.bool.isRequired,
};

export default PostPreview;
