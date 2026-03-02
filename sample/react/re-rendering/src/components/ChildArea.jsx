const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

export const ChildArea = (props) => {
  const { open } = props;

  const data = [...Array(1000).keys()]; // 1000個の要素を持つ配列を作成
  console.log(data); // 毎回レンダリングされるたびにコンソールに出力される
  data.forEach((index) => {
    // 1000回のループを実行することで、レンダリングの負荷を高める
    console.log(`Index: ${index}`); // 各インデックスをコンソールに出力
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
}