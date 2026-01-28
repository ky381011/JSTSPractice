// 非同期処理 // await async

let a = 0;

init();
async function init(){
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        a = 10;
        resolve(a);
      }, 1000);
    });
      console.log(result);
  } catch (e) {
    console.log("Catchが実行されました", e);
  }
}