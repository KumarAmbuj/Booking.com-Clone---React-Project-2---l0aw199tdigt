import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { projectId } from "../Constant/constant";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState(new Date());

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
    localStorage.setItem("booking", "");
  };

  const SetUserName = (val) => {
    setUserName(val);
  };

  const SetDate = (val) => {
    setDate(val);
  };
  useEffect(() => {
    if (localStorage.getItem("booking") == null) {
      localStorage.setItem("booking", "");
    } else {
      if (localStorage.getItem("booking")) {
        setIsLoggedIn(true);
      }
    }
  }, []);

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
        date,
        SetDate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
