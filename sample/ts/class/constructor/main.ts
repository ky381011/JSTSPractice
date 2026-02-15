// コンストラクタ : new演算子でインスタンスを生成する際に呼び出される特別なメソッド
// クラスのインスタンスを初期化するために使用される

export {};

class User {
  readonly name: string = '';
  age: number = 0;

  constructor(name: string, age: number) { // コンストラクタはクラスのインスタンスを生成する際に呼び出される
    this.name = name; // コンストラクタのみreadonlyプロパティに値を代入できる
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }

  // setName(name: string) { // ここで受け取るnameは、クラスの外部から渡される値
  //   this.name = name; // エラー: nameは読み取り専用プロパティであるため、値を変更できません。
  // }
}

const olivia = new User('Olivia', 30);
console.log(`${olivia.name} is an adult: ${olivia.isAdult()}`);

const liam = new User('Liam', 15);
console.log(`${liam.name} is an adult: ${liam.isAdult()}`);
