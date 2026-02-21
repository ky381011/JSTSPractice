const onClickAdd = () => {
  // テキストボックスの値を取得する
  const inputText = document.getElementById("add-text").value;
  // tテキストボックスを初期化する
  document.getElementById("add-text").value = "";

  // liタグの生成
  const li = document.createElement("li");

  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグの生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // divタグの子要素にpタグを設定する
  div.appendChild(p);

  // liタグの子要素にdivタグを設定する
  li.appendChild(div);

  // 未完了のTODOリストにliタグを追加する
  document.getElementById("incomplete-list").appendChild(li);  // appendChiledは子要素の最後に追加する
}

document.getElementById("add-button").addEventListener("click", onClickAdd);