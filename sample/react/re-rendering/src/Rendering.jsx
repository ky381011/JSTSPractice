import "./style.css";
import { ChildArea } from "./components/ChildArea";

import { useState, useCallback, useMemo } from "react";

export function Rendering() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value); // eはイベントオブジェクト

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), []);

  const temp = useMemo(() => 1 + 3, []); // 1 + 3の計算結果をtempに保存し、依存配列が空なので一度だけ計算される
  console.log(temp); // 毎回レンダリングされるたびにコンソールに出力される
  
  return (
    <div className="Rendering">
      <input value={text} onChange={onChangeText}/>
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}