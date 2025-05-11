import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import LoggedInContext from "../context/LoggedInContext";
import { jwtDecode } from "jwt-decode";
import JwtTokenHandler from "../scripts/JwtTokenHandler";
import "../styles/layout.css";

function Layout() {
    const { isLoggedIn } = useContext(LoggedInContext);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        if (JwtTokenHandler.isCurrentlyLoggedIn()) {
            const decodedJwt = jwtDecode(JwtTokenHandler.getToken());
            setUserId(decodedJwt.id);
        }
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
