import JwtTokenHandler from "../scripts/JwtTokenHandler";

async function signup({ request }) {
    const data = await request.formData();

    if (data.get("username").length < 2 || data.get("username").length > 32) {
        return {
            ok: false,
            error: "Username must be between 2 and 32 chars length",
        };
    }

    if (data.get("password").length < 4 || data.get("password").length > 128) {
        return {
            ok: false,
            error: "Password must be between 4 and 128 chars length",
        };
    }

    let signupRequest = {};
    const loginData = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/user",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.get("username"),
                password: data.get("password"),
                blogAuthorSecretKey: data.get("blogAuthorSecretKey"),
            }),
        }
    ).then((res) => {
        signupRequest = res;

        return res.json();
    });

    if (!signupRequest.ok) {
        JwtTokenHandler.removeToken();

        return { ok: false, error: loginData.errors };
    }

    JwtTokenHandler.updateToken(loginData.jwt);

    if (JwtTokenHandler.returnType() !== "blogAuthor") {
        JwtTokenHandler.removeToken();
        return { ok: false, error: "Not a Blog Author" };
    }

    return { ok: true };
}

export default signup;
