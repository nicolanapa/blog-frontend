import React from "react";
import { useLoaderData } from "react-router";
import PostPreview from "./PostPreview";

function Home() {
    const { posts } = useLoaderData();

    return (
        <main>
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
