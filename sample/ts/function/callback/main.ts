// 例）タイマー処理

const displayMessage = (): void => {
  console.log('Timeout!');
}

setTimeout(displayMessage, 2000); // 2秒後にdisplayMessageを実行