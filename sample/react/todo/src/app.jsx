// 関数単位でコンポーネント化する

import { use, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0); // useStateはReactの機能を使うための関数
  const onClickCountUp = () => {
    setNum(num + 1);
  }

  return (
    <>
      {/* 一つ目の波かっこはJavaScriptを使うため、二つ目の波かっこはオブジェクトを表すため */}
      <h1 style={ {color: 'red'} }>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

// ========================
// 学習内容
// ========================

// コンポーネントの変数は大文字で始める
// const App = () => {
//   return (
//     // returnする部分は必ず1つのタグで囲む必要がある
//     // <div>
//     //   <h1>こんにちは</h1>
//     //   <p>お元気ですか？</p>
//     // </div>

//     // React.Fragmentを使うと、タグで囲む必要がなくなる
//     // <React.Fragment>
//     //   <h1>こんにちは</h1>
//     //   <p>お元気ですか？</p>
//     // </React.Fragment>

//     // Fragmentは省略して書くこともできる
//     // <>
//     //   <h1>こんにちは</h1>
//     //   <p>お元気ですか？</p>
//     // </>
//   );
// };