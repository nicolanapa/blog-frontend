import React, { useContext } from "react";
import LoggedInContext from "../context/LoggedInContext";
import Login from "./Login";
import Signup from "./Signup";
import JwtTokenHandler from "../scripts/JwtTokenHandler";

function AuthenticatePage() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

    const logOut = () => {
        JwtTokenHandler.removeToken();
        setIsLoggedIn(false);
    };

    return (
        <main>
            <h1>You&apos;re {!isLoggedIn && "not"} logged in!</h1>
            {isLoggedIn && <button onClick={logOut}>Log Out</button>}

            <Login />

            <Signup />
        </main>
    );
}

export default AuthenticatePage;
