// src/shared/Layout.js

import React from "react";

const HeaderStyles = {
  background: "#a1c5ff",
  height: "30px",
  display: "flex",
  alignItems: "center",
  padding: "20px",
  color: "white",
  fontWeight: "600",
  justifyContent: "space-between",
};

const layoutStyles = {
  maxWidth: "1200px",
  minWidth: "800px",
  display: "flex",
  flexDirection: "column",
  margin: "30px auto",
};

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <h1>To-do-List</h1>
      <h3>by React</h3>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
    </div>
  );
}

export default Layout;
