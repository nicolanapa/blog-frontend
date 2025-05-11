import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import JwtTokenHandler from "../scripts/JwtTokenHandler";
import LoggedInContext from "../context/LoggedInContext";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        JwtTokenHandler.isCurrentlyLoggedIn()
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (JwtTokenHandler.returnType() !== "blogAuthor") {
            JwtTokenHandler.removeToken();
            navigate("/authenticate");
        }
    }, [location.pathname]);

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <Outlet />
        </LoggedInContext.Provider>
    );
}

export default App;
