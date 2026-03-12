# Reactの学習

1. [create-react-app](#create-react-app)
2. [Vite](#vite)

### create-react-app
#### 基盤作成
1. アプリを作成するディレクトリに移動
`cd sample/react`
1. アプリの作成
`npx create-react-app (任意のアプリ名)`
1. ワークフォルダに移動
`cd (任意のアプリ名)`

#### 白紙化
1. `src/`配下のすべてのファイルを削除
#### 土台作成
1. `src/index.jsx`を作成して以下を記述
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { (export名) } from './(任意のアプリ名)';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <(export名) />
  </StrictMode>
);
```
1. 空の`src/style.css`を作成
1. `src/(任意のアプリ名).jsx`を作成して以下を記述
```jsx
import "./style.css";
import { useState } from "react";

export function (export名)() {
  return (
    <>
      <div></div>
    </>
  );
}
```
#### 動作確認
1. Reactの実行
`npm start`

### Vite
#### 基盤作成
1. アプリを作成するディレクトリに移動
`cd sample/react`
1. アプリの作成
`npm create vite@latest`
1. インターフェースに従って作成
    1. `プロジェクト名`を入力
    1. Framework : `react`を選択
    1. Variant : `javascript`を選択
    1. (実験機能は`No`)
    1. installとstart : `Yes`
#### 次回以降
1. ディレクトリ移動
`cd sample/react/(プロジェクト名)`
1. 起動
`npm run dev`