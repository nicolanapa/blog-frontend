import React from "react";
import { Link } from "react-router";

function PostPreview({ props }) {
    return (
        <article>
            <small>{props.publishDate}</small>
            <h3>
                <Link to={"/post/" + props.id}>{props.title}</Link>
            </h3>
            <p>{String(props.content).substring(0, 30)}...</p>
        </article>
    );
}

export default PostPreview;
