import "./style.css";

export function Todo() {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <span>TODO1</span>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <span>TODO2</span>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>
            <span>TODO3</span>
            <button>戻す</button>
          </li>
          <li>
            <span>TODO4</span>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
}