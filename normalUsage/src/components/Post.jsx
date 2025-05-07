import React from "react";
import { Link, useLoaderData } from "react-router";
import Comment from "./Comment";
import AddComment from "./AddComment";

function Post() {
    const { post, comments } = useLoaderData();

    console.log(post, comments);

    return (
        <article>
            <header>
                <small>
                    <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleString()}
                    </time>
                </small>

                <address>
                    Posted by <Link to={"/user/" + post.userId}>User</Link>
                </address>

                <h2>
                    <Link to={"/post/" + post.id}>{post.title}</Link>
                </h2>
            </header>

            <p>{post.content}</p>

            <section>
                <h3>Comments</h3>

                <AddComment postId={post.id} />

                {comments.map((comment) => (
                    <Comment
                        userId={comment.userId}
                        content={comment.content}
                        key={comment.id}
                    />
                ))}
            </section>
        </article>
    );
}

export default Post;
