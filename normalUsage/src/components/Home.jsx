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

                return <PostPreview props={post} key={post.id} />;
            })}
        </main>
    );
}

export default Home;
