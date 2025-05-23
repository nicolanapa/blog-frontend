import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import "../styles/post.css";

function PostPreview(props) {
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
        </article>
    );
}

PostPreview.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date).isRequired,
};

export default PostPreview;
