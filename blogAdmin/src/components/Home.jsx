import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import PostPreview from "./PostPreview";
import "../styles/post.css";

function Home() {
    const { publishedPosts, unpublishedPosts } = useLoaderData();
    const [showPublishedPosts, setShowPublishedPosts] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        if (params.has("published")) {
            setShowPublishedPosts(
                params.get("published") === "true" ? true : false
            );
        }
    }, []);

    return (
        <main>
            <div>
                <button
                    onClick={() => {
                        setShowPublishedPosts(true);
                        window.history.replaceState(
                            "",
                            "",
                            "/?published=" + true
                        );
                    }}
                >
                    Published
                </button>
                <button
                    onClick={() => {
                        setShowPublishedPosts(false);
                        window.history.replaceState(
                            "",
                            "",
                            "/?published=" + false
                        );
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
                                content={post.content}
                                publishDate={post.publishDate}
                                isPublished={post.isPublished}
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
                                content={post.content}
                                publishDate={post.publishDate}
                                isPublished={post.isPublished}
                                key={post.id}
                            />
                        );
                    })}
            </div>
        </main>
    );
}

export default Home;
