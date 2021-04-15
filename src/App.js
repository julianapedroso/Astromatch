import React from "react";
import Home from "./components/Home";
import Logo from "./img/logo.png";
import { LogoAstroMatch, MainContainer } from "./components/styled-components";
import "./App.css";

export default function App() {
  return (
    <MainContainer className="App">
      <LogoAstroMatch src={Logo} />
      <hr />
      <Home />
    </MainContainer>
  );
}
