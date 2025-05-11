import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import PostPreview from "./PostPreview";
import "../styles/post.css";

function Home() {
    const { publishedPosts, unpublishedPosts } = useLoaderData();
    const [showPublishedPosts, setShowPublishedPosts] = useState(true);

    return (
        <main>
            <div>
                <button
                    onClick={() => {
                        setShowPublishedPosts(true);
                    }}
                >
                    Published
                </button>
                <button
                    onClick={() => {
                        setShowPublishedPosts(false);
                    }}
                >
                    Unpublished
                </button>

                <Link to="/newPost">
                    <button>New Post</button>
                </Link>
            </div>

            <div className="post-preview-container">
                {showPublishedPosts &&
                    publishedPosts.map((post, i) => {
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

                {!showPublishedPosts &&
                    unpublishedPosts.map((post, i) => {
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
            </div>
        </main>
    );
}

export default Home;
