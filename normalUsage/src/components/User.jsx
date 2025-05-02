import React from "react";
import { useLoaderData } from "react-router";
import PostPreview from "./PostPreview";

function User() {
    const { user, posts } = useLoaderData();

    return (
        <main>
            <div>
                <p>{user.type === "normalUser" ? "User" : "Blog Author"}</p>
                <address>{user.username}</address>
                <small>{user.id}</small>
            </div>

            {user.type === "blogAuthor" ? (
                <div>
                    <h2>Published Posts</h2>

                    {posts.map((post) => (
                        <PostPreview props={post} key={post.id} />
                    ))}
                </div>
            ) : (
                ""
            )}
        </main>
    );
}

export default User;
