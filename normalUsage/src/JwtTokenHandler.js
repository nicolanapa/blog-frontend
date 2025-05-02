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

    isCurrentlyLoggedIn() {
        return localStorage.getItem("jwtToken") === null ? false : true;
    }
}

export default new JwtTokenHandler();
