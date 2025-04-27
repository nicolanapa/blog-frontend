import React from "react";
import { createBrowserRouter } from "react-router";

// Import all Classes

// Use loaders ?

// Fix syntax issue in Component

const routes = createBrowserRouter([
    {
        path: "/",
        Component: <Home />,
    },
    {
        path: "/user/:id",
        Component: <User />,
    },
    {
        path: "/post/:id",
        Component: <Post />,
    },
    {
        path: "/authenticate",
        Component: <AuthenticatePage />,
    },
]);

export default routes;
