import React from "react";
import { useLoaderData } from "react-router";
import Login from "./Login";
import Signup from "./Signup";

function AuthenticatePage() {
    const { isCurrentlyLoggedIn } = useLoaderData();

    console.log(isCurrentlyLoggedIn);

    return (
        <main>
            <iframe title="Login" src="../login/frame" />

            <iframe title="Signup" src="../signup/frame" />
        </main>
    );
}

export default AuthenticatePage;
