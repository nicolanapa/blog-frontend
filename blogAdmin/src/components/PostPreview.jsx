import React, { useState } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import changePublishState from "../scripts/changePublishState";
import "../styles/post.css";

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
                Posted by <Link to={"/user/" + props.userId}>User</Link>
            </address>

            <h3>
                <Link to={"/post/" + props.id}>{props.title}</Link>
            </h3>

            <button
                type="button"
                onClick={() =>
                    changePublishState(props, setIsPublished, isPublished)
                }
            >
                {isPublished ? "Unpublish" : "Publish"}
            </button>
        </article>
    );
}

PostPreview.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date).isRequired,
    isPublished: PropTypes.bool.isRequired,
};

export default PostPreview;
