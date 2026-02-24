// 関数単位でコンポーネント化する

import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  // StrictModeを有効にしていると、Reactは開発モードでのみ、コンポーネントを2回レンダリングする。これにより、潜在的な問題を早期に発見できるようになる。
  console.log("Appがレンダリングされました"); // Appコンポーネントがレンダリングされるたびに、コンソールにこのメッセージが表示される
  const [num, setNum] = useState(0); // useStateはReactの機能を使うための関数
  const [isShowFace, setIsShowFace] = useState(true); // isShowFaceは現在の状態を表す。setIsShowFaceは状態を更新するための関数
  const onClickCountUp = () => {
    setNum( (prev) => prev + 1 ); // prevは現在のnumの値を表す。prev + 1でnumの値を1増やす
    setNum( (prev) => prev + 1 );
  }
  const onClickToggle = () => {
    setIsShowFace(!isShowFace); // !isShowFaceは現在のisShowFaceの値を反転させる。trueならfalse、falseならtrueになる
  }

  return (
    <>
      {/* 一つ目の波かっこはJavaScriptを使うため、二つ目の波かっこはオブジェクトを表すため */}
      <h1 style={ {color: 'red'} }>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>( *´艸｀)</p> } {/* isShowFaceがtrueのときだけ、顔文字を表示する */}
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