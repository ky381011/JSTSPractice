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

  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.className = "todo-item";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // クリックされた削除ボタンの親タグ(li)を未完了のTODOリストから削除する
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素にpタグを設定する
  div.appendChild(p);
  // divタグの子要素にbutton(完了)タグを設定する
  div.appendChild(completeButton);
  // divタグの子要素にbutton(削除)タグを設定する
  div.appendChild(deleteButton);

  // liタグの子要素にdivタグを設定する
  li.appendChild(div);

  // 未完了のTODOリストにliタグを追加する
  document.getElementById("incomplete-list").appendChild(li);  // appendChiledは子要素の最後に追加する
}

document.getElementById("add-button").addEventListener("click", onClickAdd);