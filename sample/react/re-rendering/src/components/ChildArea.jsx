import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

export const ChildArea = memo((props) => {
  const { open } = props;

  // const data = [...Array(1000).keys()]; // 1000個の要素を持つ配列を作成
  // console.log(data); // 毎回レンダリングされるたびにコンソールに出力される
  // data.forEach((index) => {
  //   // 1000回のループを実行することで、レンダリングの負荷を高める
  //   console.log(`Index: ${index}`); // 各インデックスをコンソールに出力
  // });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});

// 再レンダリングの条件
// 1. stateが変更されたとき
// 2. propsが変更されたとき
// 3. 親コンポーネントが再レンダリングされたとき
// ----- A ------
// |---- B -----|
// ||--- C ----||
// |||        |||
// ||----------||
// |------------|
// Aが再レンダリングされると、BとCも再レンダリングされる
// Bが再レンダリングされると、Cも再レンダリングされるが、Aは再レンダリングされない
// Cが再レンダリングされると、AとBは再レンダリングされない