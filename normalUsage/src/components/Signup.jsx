import React, { useContext, useEffect } from "react";
import { useFetcher } from "react-router";
import LoggedInContext from "../context/LoggedInContext";
import JwtTokenHandler from "../JwtTokenHandler";

function Signup() {
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
            <h2>Signup</h2>

            <fetcher.Form method="post" action="/authenticate/signup">
                {fetcher.data?.ok && updateIsLoggedIn() && (
                    <p>Created a new User!</p>
                )}
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

                <label htmlFor="">Secret Blog Author Key (optional): </label>
                <input
                    type="password"
                    id="secret-key"
                    name="blogAuthorSecretKey"
                    maxLength={64}
                />

                <button type="submit">Login</button>
            </fetcher.Form>
        </div>
    );
}

export default Signup;
