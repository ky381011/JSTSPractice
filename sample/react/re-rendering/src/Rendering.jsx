import "./style.css";
import { ChildArea } from "./components/ChildArea";

import { useState } from "react";

export function Rendering() {
  return (
    <div className="Rendering">
      <input />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}