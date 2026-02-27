import "./style.css";

export function Todo() {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p className="todo-item">TODO1</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p className="todo-item">TODO2</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p className="todo-item">TODO3</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p className="todo-item">TODO4</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}