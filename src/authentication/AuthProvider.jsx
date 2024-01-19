import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { projectId } from "../Constant/constant";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");

  //console.log(isLoggedIn, token);

  const login = () => {
    setIsLoggedIn(true);
  };
  const SetToken = (val) => {
    setToken(val);
  };
  const logout = () => {
    setToken("");
    SetUserName("");
    setIsLoggedIn(false);
  };

  const SetUserName = (val) => {
    setUserName(val);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        token,
        userName,
        SetToken,
        SetUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
