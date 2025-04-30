import React from "react";
import { Link } from "react-router";

function Comment({ props }) {
    return (
        <article>
            <h4>
                <Link to={"/user/" + props.userId}>User{props.userId}</Link>
            </h4>

            <p>{props.content}</p>
        </article>
    );
}

export default Comment;
