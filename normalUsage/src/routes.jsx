import React from "react";
import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home";
import User from "./components/User";
import Post from "./components/Post";
import AuthenticatePage from "./components/AuthenticatePage";

import allPosts from "./loaders/allPosts.js";
import user from "./loaders/User.js";
import post from "./loaders/Post.js";

const routes = createBrowserRouter([
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
            },
            {
                path: "/authenticate",
                Component: AuthenticatePage,
            },
        ],
    },
]);

export default routes;
