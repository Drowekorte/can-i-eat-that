import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, paddingTop: 120}}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
