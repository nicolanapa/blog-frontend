import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

function Comment(props) {
    return (
        <article>
            <h4>
                <Link to={"/user/" + props.userId}>User{props.userId}</Link>
            </h4>

            <p>{props.content}</p>
        </article>
    );
}

Comment.propTypes = {
    userId: PropTypes.number,
    content: PropTypes.string,
};

export default Comment;
