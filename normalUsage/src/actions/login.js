import JwtTokenHandler from "../JwtTokenHandler";

async function login({ request }) {
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

    let loginRequest = {};
    const loginData = await fetch(
        import.meta.env.VITE_FULL_HOSTNAME + "/login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.get("username"),
                password: data.get("password"),
            }),
        }
    ).then((res) => {
        loginRequest = res;

        return res.json();
    });

    console.log(loginRequest, loginData);

    if (!loginRequest.ok) {
        return { ok: false, error: loginData.errors };
    }

    JwtTokenHandler.updateToken(loginData.jwt);

    return { ok: true };
}

export default login;
