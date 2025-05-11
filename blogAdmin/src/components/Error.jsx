import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";

function Error() {
    const error = useRouteError();
    console.log(error);

    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>{error.status}</h1>
                <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

export default Error;
