import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import "../styles/comment.css";

function Comment(props) {
    console.log(props);
    return (
        <article className="comment">
            <div>
                <div className="user-comment">
                    <img
                        src="/icons/account.svg"
                        alt="User"
                        width="30px"
                        height="auto"
                    />
                    <h4>
                        <Link to={"/user/" + props.userId}>
                            {props.username}
                        </Link>
                    </h4>
                </div>

                <small>
                    <time dateTime={props.publishDate}>
                        {new Date(props.publishDate).toLocaleDateString()}
                    </time>
                </small>
            </div>

            <p className="content">{props.content}</p>
        </article>
    );
}

Comment.propTypes = {
    userId: PropTypes.number,
    username: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date),
    content: PropTypes.string,
};

export default Comment;
