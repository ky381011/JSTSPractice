const onClickAdd = () => {
  // テキストボックスの値を取得する
  const inputText = document.getElementById("add-text").value;
  // tテキストボックスを初期化する
  document.getElementById("add-text").value = "";

  // liタグの生成
  const li = document.createElement("li");
  console.log(li);

  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  // pタグの生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;
  console.log(p);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);