import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

function PostPreview(props) {
    console.log(props);

    return (
        <article>
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
        </article>
    );
}

PostPreview.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date).isRequired,
};

export default PostPreview;
