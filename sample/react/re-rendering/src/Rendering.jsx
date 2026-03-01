import "./style.css";
import { ChildArea } from "./components/ChildArea";

import { useState } from "react";

export function Rendering() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value); // eはイベントオブジェクト

  const onClickOpen = () => setOpen(!open);

  return (
    <div className="Rendering">
      <input value={text} onChange={onChangeText}/>
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}/>
    </div>
  );
}