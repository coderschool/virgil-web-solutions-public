import React, { useState } from "react";
import Auth from "./auth";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let singin = (newUser, callback) => {
    return Auth.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return Auth.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, singin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
