import { InputTodo } from "./components/InputTodo";
import "./style.css";

import { useState } from "react";

export function Todo() {
  // ===================================
  // コンポーネントの構成
  // ===================================
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  // ===================================
  // タスクの追加機能
  // ===================================
  const onChangeTodoText = (event) => setTodoText(event.target.value); // 実際の開発では react-hook-form などのライブラリを使用することが多い
  const onClickAdd = () => {
    if (todoText === "") return; // 入力が空の場合は何もしない
    const newTodos = [...incompleteTodos, todoText]; // スプレッド構文で配列を展開して新しい配列を作成する
    setIncompleteTodos(newTodos); // 既存の配列を直接変更するのではなく、新しい配列を作成して状態を更新する
    setTodoText(""); // 入力欄を空にする
  }

  // ===================================
  // タスクの削除機能
  // ===================================
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]; // スプレッド構文で配列を展開して新しい配列を作成する
    newTodos.splice(index, 1); // index番目の要素を削除する
    setIncompleteTodos(newTodos); // 既存の配列を直接変更するのではなく、新しい配列を作成して状態を更新する
  }

  // ===================================
  // タスクの完了機能
  // ===================================
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]; // スプレッド構文で配列を展開して新しい配列を作成する
    newIncompleteTodos.splice(index, 1); // index番目の要素を削除する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]; // スプレッド構文で配列を展開して新しい配列を作成する
    setIncompleteTodos(newIncompleteTodos); // 既存の配列を直接変更するのではなく、新しい配列を作成して状態を更新する
    setCompleteTodos(newCompleteTodos); // 既存の配列を直接変更するのではなく、新しい配列を作成して状態を更新する
  }

  // ===================================
  // タスクの戻す機能
  // ===================================
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]; // スプレッド構文で配列を展開して新しい配列を作成する
    newCompleteTodos.splice(index, 1); // index番目の要素を削除する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]; // スプレッド構文で配列を展開して新しい配列を作成する
    setCompleteTodos(newCompleteTodos); // 既存の配列を直接変更するのではなく、新しい配列を作成して状態を更新する
    setIncompleteTodos(newIncompleteTodos); // 既存の配列を直接変更するのではなく、新しい配列を作成して状態を更新する
  }

  return (
    <>
      <InputTodo 
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}      
      />
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => { // indexは順番が変わる場合があるため、keyには使用しない
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
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
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}