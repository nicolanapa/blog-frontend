class JwtTokenHandler {
    updateToken(token) {
        localStorage.setItem("jwtTocken", token);
    }

    removeTocken() {
        localStorage.removeItem("jwtTocken");
    }

    getToken() {
        return localStorage.getItem("jwtTocken");
    }

    isCurrentlyLoggedIn() {
        return localStorage.getItem("jwtTocken") === null ? false : true;
    }
}

export default new JwtTokenHandler();
