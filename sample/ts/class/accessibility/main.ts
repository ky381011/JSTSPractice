// private : クラスの外部からアクセスできないプロパティやメソッドを定義するためのアクセス修飾子
// public : クラスの外部からアクセスできるプロパティやメソッドを定義するためのアクセス修飾子（デフォルト）

export {};

class User {
  name: string = '';
  private age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // デフォルトはpublicなので省略可
  public isAdult(): boolean {
    return this.age >= 18;
  }
}

const olivia = new User('Olivia', 30);
console.log(`${olivia.name} is an adult: ${olivia.isAdult()}`);
// console.log(olivia.age); // エラー: ageはprivateプロパティであるため、クラスの外部からアクセスできません。
console.log(olivia.isAdult); // エラー: ageはprivateプロパティであるため、クラスの外部からアクセスできません。

