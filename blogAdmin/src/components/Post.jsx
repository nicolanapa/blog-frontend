import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Comment from "./Comment";
import AddComment from "./AddComment";
import "../styles/post.css";
import EditPost from "./EditPost";
import deleteX from "../scripts/deleteX";

function Post() {
    const { post, comments } = useLoaderData();
    const [viewMode, setViewMode] = useState(true);

    return (
        <article className="post-container">
            {viewMode && (
                <>
                    <header className="post-info">
                        <small className="date">
                            <time dateTime={post.publishDate}>
                                {new Date(post.publishDate).toLocaleString()}
                            </time>
                        </small>

                        <address>
                            Posted by{" "}
                            <Link to={"/user/" + post.userId}>
                                {post.user.username}
                            </Link>
                        </address>

                        <h2>
                            <Link to={"/post/" + post.id}>{post.title}</Link>
                        </h2>
                    </header>

                    <p>{post.content}</p>
                </>
            )}

            {!viewMode && (
                <EditPost
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    isPublished={post.isPublished}
                />
            )}

            <div className="button-container">
                <button
                    type="button"
                    onClick={() => setViewMode(!viewMode)}
                    className="edit-button"
                >
                    <img
                        src="/icons/edit.svg"
                        alt="Edit this post and go into edit mode"
                        width="30px"
                        height="auto"
                    />
                </button>

                <button
                    type="button"
                    onClick={async () => {
                        if (await deleteX("post", post.id)) {
                            location.assign("/");
                        }
                    }}
                    className="edit-button"
                >
                    <img
                        src="/icons/delete.svg"
                        alt="Delete this post"
                        width="30px"
                        height="auto"
                    />
                </button>
            </div>

            <section className="comments-container">
                <h3>Comments</h3>

                <AddComment postId={post.id} />

                {comments.map((comment) => (
                    <Comment
                        id={comment.id}
                        userId={comment.userId}
                        username={comment.user.username}
                        publishDate={comment.publishDate}
                        content={comment.content}
                        key={comment.id}
                    />
                ))}
            </section>
        </article>
    );
}

export default Post;
