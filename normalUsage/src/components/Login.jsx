import React, { useContext, useEffect } from "react";
import { useFetcher } from "react-router";
import LoggedInContext from "../context/LoggedInContext";
import JwtTokenHandler from "../JwtTokenHandler";

function Login() {
    const fetcher = useFetcher();
    const { setIsLoggedIn } = useContext(LoggedInContext);

    const updateIsLoggedIn = () => {
        setTimeout(() => {
            setIsLoggedIn(JwtTokenHandler.isCurrentlyLoggedIn());
        }, 1);
    };

    useEffect(() => {
        updateIsLoggedIn();
    }, []);

    return (
        <div>
            <h2>Login</h2>

            <fetcher.Form method="post" action="/authenticate/login">
                {fetcher.data?.ok && updateIsLoggedIn()}
                {fetcher.data?.error && <p>{fetcher.data.error}</p>}

                <label htmlFor="">Username: </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    minLength={2}
                    maxLength={32}
                    required
                />

                <label htmlFor="">Password: </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    minLength={4}
                    maxLength={128}
                    required
                />

                <button type="submit">Login</button>
            </fetcher.Form>
        </div>
    );
}

export default Login;
