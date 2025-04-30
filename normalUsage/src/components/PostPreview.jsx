import React from "react";
import { Link } from "react-router";

function PostPreview({ props }) {
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

export default PostPreview;
