import React, { useState } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import "../styles/comment.css";
import EditComment from "./EditComment";
import deleteX from "../scripts/deleteX";

function Comment(props) {
    const [viewMode, setViewMode] = useState(true);

    return (
        <article className="comment">
            {viewMode && (
                <>
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
                                {new Date(
                                    props.publishDate
                                ).toLocaleDateString()}
                            </time>
                        </small>
                    </div>

                    <p className="content">{props.content}</p>
                </>
            )}

            {!viewMode && <EditComment id={props.id} content={props.content} />}

            <div className="button-container">
                <button
                    type="button"
                    onClick={() => setViewMode(!viewMode)}
                    className="edit-button"
                >
                    <img
                        src="/icons/edit.svg"
                        alt="Edit this comment and go into edit mode"
                        width="20px"
                        height="auto"
                    />
                </button>

                <button
                    type="button"
                    onClick={async () => {
                        if (await deleteX("comment", props.id)) {
                            location.reload();
                        }
                    }}
                    className="edit-button"
                >
                    <img
                        src="/icons/delete.svg"
                        alt="Delete this comment"
                        width="20px"
                        height="auto"
                    />
                </button>
            </div>
        </article>
    );
}

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number,
    username: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date).isRequired,
    content: PropTypes.string.isRequired,
};

export default Comment;
