const onClickAdd = () => {
  // テキストボックスの値を取得する
  const inputText = document.getElementById("add-text").value;
  // テキストボックスを初期化する
  document.getElementById("add-text").value = "";

  // 関数createIncompleteTodoにテキストボックスの値を渡す
  createIncompleteTodo(inputText);
}

// 渡された引数をもとに未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
  // liタグの生成
  const li = document.createElement("li");

  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグの生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.className = "todo-item";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // クリックされた完了ボタンの親タグ(li)配下の完了ボタンと削除ボタンを削除する
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();  // 完了ボタンの次の要素(削除ボタン)を削除する
    completeButton.remove();  // 完了ボタン自身を削除する
    // 戻すボタンを生成して完了したTODOに追加する
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {});
    moveTarget.firstElementChild.appendChild(backButton);  // moveTargetの最初の子要素(div)に戻すボタンを追加する
    // 完了リストに移動する
    document.getElementById("complete-list").appendChild(moveTarget); // DOM自体が移動するため未完了リストから自動で削除される
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