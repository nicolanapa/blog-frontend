import { createBrowserRouter } from "react-router";

import Home from "./components/Home";
import User from "./components/User";
import Post from "./components/Post";
import AuthenticatePage from "./components/AuthenticatePage";

import allPosts from "./loaders/allPosts.js";

const routes = createBrowserRouter([
    {
        path: "/",
        loader: allPosts,
        Component: Home,
    },
    {
        path: "/user/:id",
        Component: User,
    },
    {
        path: "/post/:id",
        Component: Post,
    },
    {
        path: "/authenticate",
        Component: AuthenticatePage,
    },
]);

export default routes;
