import React from "react";
import { useLoaderData } from "react-router";
import PostPreview from "./PostPreview";
import "../styles/user.css";
import "../styles/post.css";

function User() {
    const { user, posts } = useLoaderData();

    return (
        <main>
            <div className="user-info">
                <div>
                    <img
                        src="/icons/account.svg"
                        alt="User"
                        width="64px"
                        height="auto"
                    />

                    <div>
                        <p>
                            {user.type === "normalUser"
                                ? "User"
                                : "Blog Author"}
                        </p>
                        <address className="username">{user.username}</address>
                        <small className="id">{user.id}</small>
                    </div>
                </div>
            </div>

            {user.type === "blogAuthor" ? (
                <div className="posts">
                    <h2>Published Posts</h2>

                    <div className="post-preview-container">
                        {posts.map((post) => (
                            <PostPreview
                                id={post.id}
                                userId={post.userId}
                                username={post.user.username}
                                title={post.title}
                                publishDate={post.publishDate}
                                key={post.id}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </main>
    );
}

export default User;
