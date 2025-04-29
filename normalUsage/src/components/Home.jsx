import React from "react";
import { useLoaderData } from "react-router";

function Home() {
    const { posts } = useLoaderData();

    return <>Test</>;
}

export default Home;
