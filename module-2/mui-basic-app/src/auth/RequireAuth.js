import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";

function RequireAuth({ children }) {
  const auth = useContext(AuthContext);
  const location = useLocation();
  // if (!auth.user) {
  //   //return <Navigate to="/login" state={{ from: location }} />;
  //   loginCallBack();
  // }
  return children;
}

export default RequireAuth;
