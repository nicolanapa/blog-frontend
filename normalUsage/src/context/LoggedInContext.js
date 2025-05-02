import { createContext } from "react";
import JwtTokenHandler from "../JwtTokenHandler.js";

const LoggedInContext = createContext({
    isLoggedIn: JwtTokenHandler.isCurrentlyLoggedIn(),
    setIsLoggedIn: () => {},
});

export default LoggedInContext;
