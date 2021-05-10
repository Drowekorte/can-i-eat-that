import React from "react";
import { Redirect, Route } from "react-router-dom";
import useToken from "./useToken";

const PrivateRoute = (props) => {
  const { token } = useToken();
  console.log(token);
  if (!token) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
