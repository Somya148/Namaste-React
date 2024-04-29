import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User", // Use colon instead of equal sign
});

export default UserContext;