import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// コンポーネントの変数は大文字で始める
const App = () => {
  return (
    // returnする部分は必ず1つのタグで囲む必要がある
    <div>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
