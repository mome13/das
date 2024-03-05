import { createContext, useContext } from "react";
const loginContext = createContext({});

export const LoginProvider = loginContext.Provider;

export default () => useContext(loginContext);
