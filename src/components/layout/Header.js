import React from "react";

function Header() {
  return (
    <header style={hstyle}>
      <h1>TodoList</h1>
    </header>
  );
}
const hstyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
