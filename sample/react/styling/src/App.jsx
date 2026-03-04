import "./style.css";
import { useState } from "react";

import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssMojules";

export function App() {
  return (
    <>
      <div className="App">
        <InlineStyle />
        <CssModules />
      </div>
    </>
  );
}