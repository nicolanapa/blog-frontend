import React from "react";
import { useLoaderData } from "react-router";
import PostPreview from "./PostPreview";
import "../styles/post.css";

function Home() {
    const { posts } = useLoaderData();

    return (
        <main className="post-preview-container">
            {posts.map((post, i) => {
                if (i > 20) {
                    return;
                }

                return (
                    <PostPreview
                        id={post.id}
                        userId={post.userId}
                        title={post.title}
                        publishDate={post.publishDate}
                        key={post.id}
                    />
                );
            })}
        </main>
    );
}

export default Home;
