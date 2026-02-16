export {};

class User {
  name: string = '';
  private age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 18;
  }
}

class AdminUser extends User {
  adminRole: number = 0;

  constructor(name: string, age: number, adminRole: number) {
    super(name, age); // 親クラスのコンストラクタを呼び出す
    this.adminRole = adminRole;
  }

  public sayAdminRole(): void {
    console.log(`My admin Role: ${this.adminRole}`);
  }

  // 管理者は成人であると設定するため、isAdultメソッドをオーバーライドする
  public override isAdult(): boolean { // overrideキーワードを使用して、親クラスのメソッドをオーバーライドすることを明示する
    return true;
  }
}

const emma = new AdminUser('Emma', 30, 1); // emmaはAdminUser型になる
console.log(emma.name);
console.log(emma.isAdult());
emma.sayAdminRole();