import React from "react";
import "./Header.css";

// KISS
function Collection(props) {
  console.log("Collection:", props.children);
  return <div className="collection">{props.children}</div>;
}

function Header(props) {
  // console.log("Header: ", props);

  return (
    <header className="header">
      <Collection prop1="1">
        <h3>title</h3>
        <p>description</p>
      </Collection>
    </header>
  );
}

export default Header;
