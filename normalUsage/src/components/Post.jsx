import React from "react";
import { Link, useLoaderData } from "react-router";
import Comment from "./Comment";
import AddComment from "./AddComment";
import "../styles/post.css";

function Post() {
    const { post, comments } = useLoaderData();

    return (
        <article className="post-container">
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

            <section className="comments-container">
                <h3>Comments</h3>

                <AddComment postId={post.id} />

                {comments.map((comment) => (
                    <Comment
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
