import React from "react";
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <header style={{ marginBottom: "80px" }}>
                Header
                <nav>Home, Users, your Profile...</nav>
            </header>

            <Outlet />

            <footer style={{ marginTop: "80px" }}>Footer?</footer>
        </>
    );
}

export default Layout;
