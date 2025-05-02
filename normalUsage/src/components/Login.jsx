import React, { useEffect } from "react";
import { useFetcher, useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate();
    let fetcher = useFetcher();

    useEffect(() => {
        if (!window.frameElement) {
            navigate("/authenticate");
        }
    }, []);

    return (
        <div>
            <h2>Login</h2>

            <fetcher.Form method="post">
                {fetcher.data?.ok && <p>Logged in!</p>}
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
