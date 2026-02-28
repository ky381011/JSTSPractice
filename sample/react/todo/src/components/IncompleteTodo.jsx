export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => { // indexは順番が変わる場合があるため、keyには使用しない
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
  );
}