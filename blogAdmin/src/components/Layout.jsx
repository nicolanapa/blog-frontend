import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import LoggedInContext from "../context/LoggedInContext";
import JwtTokenHandler from "../scripts/JwtTokenHandler";
import "../styles/layout.css";

function Layout() {
    const { isLoggedIn } = useContext(LoggedInContext);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        setUserId(JwtTokenHandler.returnId());
    }, [isLoggedIn]);

    return (
        <>
            <header>
                <nav>
                    <h2>
                        <Link to={"/"}>Home</Link>
                    </h2>

                    <h2>
                        <Link
                            to={
                                isLoggedIn ? "/user/" + userId : "/authenticate"
                            }
                        >
                            {isLoggedIn ? "Your Profile" : "Login / Signup"}
                        </Link>
                    </h2>
                </nav>
            </header>

            <Outlet />
        </>
    );
}

export default Layout;
