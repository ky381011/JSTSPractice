// 関数単位でコンポーネント化する

import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  // StrictModeを有効にしていると、Reactは開発モードでのみ、コンポーネントを2回レンダリングする。これにより、潜在的な問題を早期に発見できるようになる。
  console.log("Appがレンダリングされました"); // Appコンポーネントがレンダリングされるたびに、コンソールにこのメッセージが表示される
  const [num, setNum] = useState(0); // useStateはReactの機能を使うための関数
  const [isShowFace, setIsShowFace] = useState(true); // isShowFaceは現在の状態を表す。setIsShowFaceは状態を更新するための関数
  const onClickCountUp = () => {
    setNum( (prev) => prev + 1 ); // prevは現在のnumの値を表す。prev + 1でnumの値を1増やす
  }
  const onClickToggle = () => {
    setIsShowFace(!isShowFace); // !isShowFaceは現在のisShowFaceの値を反転させる。trueならfalse、falseならtrueになる
  }

  // useEffectは副作用を処理するための関数。副作用とは、コンポーネントのレンダリング以外の処理のことを指す。例えば、APIからデータを取得する、イベントリスナーを設定する、などが副作用にあたる。
  useEffect(() => {
    console.log("useEffectが実行されました"); // useEffectが実行されるたびに、コンソールにこのメッセージが表示される
    if (num % 3 === 0) { // numが3の倍数のとき、顔文字を表示する
      isShowFace || setIsShowFace(true); // isShowFaceがfalseのときだけ、setIsShowFace(true)を実行する。これにより、numが3の倍数のときは必ず顔文字が表示されるようになる
    } else { // numが3の倍数でないとき、顔文字を非表示にする
      isShowFace && setIsShowFace(false); // isShowFaceがtrueのときだけ、setIsShowFace(false)を実行する。これにより、numが3の倍数でないときは必ず顔文字が非表示になるようになる
    }
  }, [num]); // numが変更されるたびに、useEffectが実行されるようになる

  

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