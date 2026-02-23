export const ColorfulMessage = (props) => { // 最初から分割代入してもOK
  const {color, children} = props; // propsからcolorとchildrenを分割代入する
  const contentStyle = {
    color: color, // オブジェクト名と変数名が同じ場合は、color: colorのように書かなくても、colorだけでOK
    fontSize: '18px',
  };
  return (
    <p style={contentStyle}>{children}</p>
  );
};