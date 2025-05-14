import { jwtDecode } from "jwt-decode";

class JwtTokenHandler {
    updateToken(token) {
        localStorage.setItem("jwtToken", token);
    }

    removeToken() {
        localStorage.removeItem("jwtToken");
    }

    getToken() {
        return localStorage.getItem("jwtToken");
    }

    returnType() {
        if (this.isCurrentlyLoggedIn()) {
            try {
                const decodedJwt = jwtDecode(this.getToken());

                return decodedJwt.type;
            } catch {
                this.removeToken();
            }
        }

        return "";
    }

    returnId() {
        if (this.isCurrentlyLoggedIn()) {
            try {
                const decodedJwt = jwtDecode(this.getToken());

                return decodedJwt.id;
            } catch {
                this.removeToken();
            }
        }

        return 0;
    }

    isCurrentlyLoggedIn() {
        return localStorage.getItem("jwtToken") === null ? false : true;
    }
}

export default new JwtTokenHandler();
