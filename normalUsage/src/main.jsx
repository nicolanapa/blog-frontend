import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import routes from "./routes";

import "./styles/style.css";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
