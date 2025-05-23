import React, { useContext, useEffect } from "react";
import { useFetcher } from "react-router";
import LoggedInContext from "../context/LoggedInContext";
import JwtTokenHandler from "../scripts/JwtTokenHandler";
import "../styles/authenticatePage.css";

function Signup() {
    const fetcher = useFetcher();
    const { setIsLoggedIn } = useContext(LoggedInContext);

    const updateIsLoggedIn = () => {
        setTimeout(() => {
            setIsLoggedIn(JwtTokenHandler.isCurrentlyLoggedIn());
        }, 250);
    };

    useEffect(() => {
        updateIsLoggedIn();
    }, []);

    return (
        <div>
            <h2 className="section-title">Signup</h2>

            <fetcher.Form
                method="post"
                action="/authenticate/signup"
                className="authentication-form"
            >
                {fetcher.data?.ok && updateIsLoggedIn()}
                {fetcher.data?.error && (
                    <p className="error">{fetcher.data.error}</p>
                )}

                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        minLength={2}
                        maxLength={32}
                        required
                    />

                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        minLength={4}
                        maxLength={128}
                        required
                    />

                    <label htmlFor="secret-key">Secret Blog Author Key: </label>
                    <input
                        type="password"
                        id="secret-key"
                        name="blogAuthorSecretKey"
                        maxLength={64}
                        required
                    />
                </div>

                <button type="submit" className="login-button">
                    Signup
                </button>
            </fetcher.Form>
        </div>
    );
}

export default Signup;
