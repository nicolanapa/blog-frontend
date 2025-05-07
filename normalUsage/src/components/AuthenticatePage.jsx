import React, { useContext } from "react";
import LoggedInContext from "../context/LoggedInContext";
import Login from "./Login";
import Signup from "./Signup";
import JwtTokenHandler from "../scripts/JwtTokenHandler";
import "../styles/authenticatePage.css";

function AuthenticatePage() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

    const logOut = () => {
        JwtTokenHandler.removeToken();
        setIsLoggedIn(false);
    };

    return (
        <main className="authenticate-container">
            <div className="login-status">
                <h1>You&apos;re {!isLoggedIn && "not"} logged in!</h1>
                {isLoggedIn && <button onClick={logOut} className="log-out-button">Log Out</button>}
            </div>

            <Login />

            <Signup />
        </main>
    );
}

export default AuthenticatePage;
