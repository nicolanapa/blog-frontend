import React from "react";
import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home";
import User from "./components/User";
import Post from "./components/Post";
import AuthenticatePage from "./components/AuthenticatePage";

import allPosts from "./loaders/allPosts.js";
import user from "./loaders/user.js";
import post from "./loaders/post.js";

import login from "./actions/login.js";
import signup from "./actions/signup.js";
import App from "./components/App.jsx";
import addComment from "./actions/addComment.js";

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
                                path: "addComment",
                                action: addComment,
                            },
                        ],
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
                ],
            },
        ],
    },
]);

export default routes;
