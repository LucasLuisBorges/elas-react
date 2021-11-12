import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Routes } from "./routes";
import { AuthProvider } from "./contexts/auth";

const GlobalStyle = createGlobalStyle`
 * {
  padding:0;
  margin:0;
  vertical-align:baseline;
  list-style:none;
  border:0
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
