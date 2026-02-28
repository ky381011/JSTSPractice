import "./style.css";

import { useState } from "react";

export function Todo() {
  // ===================================
  // コンポーネントの構成
  // ===================================
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([
    "TODO1",
    "TODO2"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "TODO3",
    "TODO4"
  ]);
  // ===================================
  // タスクの追加機能
  // ===================================
  
  const onChangeTodoText = (event) => setTodoText(event.target.value); // 実際の開発では react-hook-form などのライブラリを使用することが多い
  const onClickAdd = () => {
    if (todoText === "") return; // 入力が空の場合は何もしない
    const newTodos = [...imcompleteTodos, todoText]; // スプレッド構文で配列を展開して新しい配列を作成する
    setImcompleteTodos(newTodos); // 既存の配列を直接変更するのではなく、新しい配列を作成して状態を更新する
    setTodoText(""); // 入力欄を空にする
  }

  // ===================================
  // タスクの削除機能
  // ===================================
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos]; // スプレッド構文で配列を展開して新しい配列を作成する
    newTodos.splice(index, 1); // index番目の要素を削除する
    setImcompleteTodos(newTodos); // 既存の配列を直接変更するのではなく、新しい配列を作成して状態を更新する
  }

  // ===================================
  // タスクの完了機能
  // ===================================

  // ===================================
  // タスクの戻す機能
  // ===================================
  
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo, index) => { // indexは順番が変わる場合があるため、keyには使用しない
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button> {/* onClickDeleteに引数を渡すために、無名関数でラップする */ }
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}