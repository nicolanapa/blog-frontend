import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Comment from "./Comment";
import AddComment from "./AddComment";
import "../styles/post.css";
import EditPost from "./EditPost";

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
                            <Link to={"/user/" + post.userId}>User</Link>
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

            <button type="button" onClick={() => setViewMode(!viewMode)}>
                <img
                    src="/icons/edit.svg"
                    alt="Edit this post and go into edit mode"
                    width="30px"
                    height="auto"
                />
            </button>

            <section className="comments-container">
                <h3>Comments</h3>

                <AddComment postId={post.id} />

                {comments.map((comment) => (
                    <Comment
                        id={comment.id}
                        userId={comment.userId}
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
