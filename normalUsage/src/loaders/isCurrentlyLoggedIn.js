import JwtTokenHandler from "../JwtTokenHandler.js";

function isCurrentlyLoggedIn() {
    return { isCurrentlyLoggedIn: JwtTokenHandler.isCurrentlyLoggedIn() };
}

export default isCurrentlyLoggedIn;
