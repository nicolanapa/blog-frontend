import React from "react";
import { createBrowserRouter } from "react-router";

import App from "./components/App.jsx";
import Layout from "./components/Layout.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home";
import User from "./components/User";
import Post from "./components/Post";
import AuthenticatePage from "./components/AuthenticatePage";
import NewPost from "./components/NewPost.jsx";

import allPosts from "./loaders/allPosts.js";
import user from "./loaders/user.js";
import post from "./loaders/post.js";

import login from "./actions/login.js";
import signup from "./actions/signup.js";
import addComment from "./actions/addComment.js";
import newPost from "./actions/newPost.js";
import editPost from "./actions/editPost.js";
import editComment from "./actions/editComment.js";

const routes = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                Component: Layout,
                errorElement: <Error />,
                children: [
                    {
                        path: "/",
                        loader: allPosts,
                        Component: Home,
                    },
                    {
                        path: "/user/:id",
                        loader: user,
                        Component: User,
                    },
                    {
                        path: "/post/:id",
                        loader: post,
                        Component: Post,
                        children: [
                            {
                                path: "edit",
                                action: editPost,
                            },
                            {
                                path: "addComment",
                                action: addComment,
                            },
                        ],
                    },
                    {
                        path: "/comment/:id/edit",
                        action: editComment,
                    },
                    {
                        path: "/authenticate",
                        Component: AuthenticatePage,
                        children: [
                            {
                                path: "login",
                                action: login,
                            },
                            {
                                path: "signup",
                                action: signup,
                            },
                        ],
                    },
                    {
                        path: "/newPost",
                        Component: NewPost,
                        action: newPost,
                    },
                ],
            },
        ],
    },
]);

export default routes;
