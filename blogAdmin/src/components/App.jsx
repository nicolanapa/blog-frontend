import React, { useState } from "react";
import { Outlet } from "react-router";
import JwtTokenHandler from "../scripts/JwtTokenHandler";
import LoggedInContext from "../context/LoggedInContext";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        JwtTokenHandler.isCurrentlyLoggedIn()
    );

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <Outlet />
        </LoggedInContext.Provider>
    );
}

export default App;
