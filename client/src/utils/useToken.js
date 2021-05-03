import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    // Session storage is a piece of storage in your browser, it goes away when you close the window. It's a bunch of string type key value pairs... you are getting the one called "token"
    const tokenString = sessionStorage.getItem("token");
    //We turn that value into a json from the json string
    const userToken = JSON.parse(tokenString);
    //that json looks like {token:"something"}
    return userToken?.token;
  };
  // Making a little custom hook
  const [token, setToken] = useState(getToken());

  //adding a function to save tokens
  const saveToken = (userToken) => {
    // goes into session storage and writes the token
    // it stores it in state AND in session storage simultaneously, so that they are in the same spot
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  // we return the setter and the token so that our component has access to each
  return {
    setToken: saveToken,
    token,
  };
}
