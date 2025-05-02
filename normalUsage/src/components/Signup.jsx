import React, { useEffect } from "react";
import { useFetcher, useNavigate } from "react-router";

function Signup() {
    const navigate = useNavigate();
    const fetcher = useFetcher();

    useEffect(() => {
        if (!window.frameElement) {
            navigate("/authenticate");
        }
    }, []);

    return (
        <div>
            <h2>Signup</h2>

            <fetcher.Form method="post">
                {fetcher.data?.ok && <p>Created and logged in!</p>}
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
